import {forwardRef, Inject, Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {isEmail, isLength} from 'validator';
import {IAdminCreate, IAdminInfo, IAdminUpdate} from '../interfaces/admin.interface';
import {Admin} from '../entities/admin.entity';
import {IJwtReply} from '../interfaces/jwt.interface';
import {AuthorizeService} from './authorize.service';
import {checkPassword, parsePassword} from '../utils/crypto.util';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepo: Repository<Admin>,
    @Inject(forwardRef(() => AuthorizeService))
    private readonly authService: AuthorizeService,
  ) {
  }

  async checkAdminInput(adminInput: IAdminCreate | IAdminUpdate): Promise<boolean> {
    if (adminInput.username && !isLength(adminInput.username, 5, 24)) {
      throw new HttpException('username length is 5~24', HttpStatus.NOT_ACCEPTABLE);
    }
    if (adminInput.username && await this.adminRepo.findOne({where: {username: adminInput.username}})) {
      throw new HttpException('username already exists', HttpStatus.CONFLICT);
    }
    if (adminInput.email && !isEmail(adminInput.email)) {
      throw new HttpException('email check error', HttpStatus.NOT_ACCEPTABLE);
    }
    if (adminInput.email && await this.adminRepo.findOne({where: {email: adminInput.email}})) {
      throw new HttpException('email already exists', HttpStatus.CONFLICT);
    }
    if (adminInput.password && !isLength(adminInput.password, 5, 24)) {
      throw new HttpException('password length is 5-24', HttpStatus.NOT_ACCEPTABLE);
    }
    return true;
  }

  async createAdmin(adminInput: IAdminCreate): Promise<void> {
    if (!adminInput.username || !adminInput.email || !adminInput.password) {
      throw new HttpException('username, email, password not null', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    adminInput.email = adminInput.email.toLocaleLowerCase();
    if (await this.checkAdminInput(adminInput)) {
      adminInput.password = parsePassword(adminInput.password);
      await this.adminRepo.save(this.adminRepo.create(adminInput));
    }
  }

  async updateAdmin(id: number, adminInput: IAdminUpdate): Promise<void> {
    const admin = await this.adminRepo.findOne(id);
    if (!admin) {
      throw new HttpException(`admin id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    if (admin.username === adminInput.username) {
      delete adminInput.username;
    }
    if (admin.email === adminInput.email) {
      delete adminInput.email;
    }
    if (adminInput.email) {
      adminInput.email = adminInput.email.toLocaleLowerCase();
    }

    if (await this.checkAdminInput(adminInput)) {
      if (adminInput.password) {
        adminInput.password = parsePassword(adminInput.password);
      }
      await this.adminRepo.update(id, {...adminInput});
    }
  }

  async deleteAdmin(id: number): Promise<void> {
    const admin = await this.adminRepo.findOne(id);
    if (!admin) {
      throw new HttpException(`admin id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.adminRepo.remove(admin);
  }

  async fetchAll(): Promise<IAdminInfo[]> {
    const admins = await this.adminRepo.find();
    return admins.map(item => {
      delete item.password;
      return item;
    });
  }

  async fetchOneById(id: number): Promise<IAdminInfo> {
    const admin = await this.adminRepo.findOne(id);
    if (!admin) {
      throw new HttpException(`admin id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    delete admin.password;
    return admin;
  }

  async adminLogin(account: string, password: string): Promise<{ admin: IAdminInfo, reply: IJwtReply}> {
    const admin = await this.adminRepo.createQueryBuilder('admin')
      .where(`admin.username = :account`, {account})
      .orWhere(`admin.email = :account`, {account: account.toLocaleLowerCase()})
      .getOne();

    if (!admin) {
      throw new HttpException(`admin username or email not exist`, HttpStatus.NOT_FOUND);
    }

    if (!checkPassword(password, admin.password)) {
      throw new HttpException(`admin password is error`, HttpStatus.NOT_ACCEPTABLE);
    }

    const reply: IJwtReply = await this.authService.createToken({id: admin.id, username: admin.username});
    delete admin.password;

    return {reply, admin};
  }
}
