import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Setting} from '../entities/setting.entity';
import {ISettingModel} from '../interfaces/setting.interface';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepo: Repository<Setting>,
  ) {
  }

  async create(settingInput: ISettingModel): Promise<void> {
    if (!settingInput.name) {
      throw new HttpException('setting name can\'t null', HttpStatus.NOT_ACCEPTABLE);
    }
    if (typeof settingInput.name !== 'string') {
      throw new HttpException('setting name should be string', HttpStatus.NOT_ACCEPTABLE);
    }
    if (await await this.settingRepo.findOne({where: {name: settingInput.name}})) {
      throw new HttpException('setting name already exists', HttpStatus.CONFLICT);
    }

    await this.settingRepo.save(this.settingRepo.create(settingInput));
  }

  async update(name: string, settingInput: ISettingModel): Promise<void> {
    const setting = await this.settingRepo.findOne(name);
    if (!setting) {
      throw new HttpException(`setting name:${name} not exist`, HttpStatus.NOT_FOUND);
    }
    if (settingInput.name) {
      delete settingInput.name;
    }
    await this.settingRepo.update(name, settingInput);
  }

  async delete(name: string): Promise<void> {
    const setting = await this.settingRepo.findOne(name);
    if (!setting) {
      throw new HttpException(`setting name:${name} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.settingRepo.remove(setting);
  }

  async fetchAll(): Promise<Setting[]> {
    return await this.settingRepo.find();
  }

  async fetchOne(name: string): Promise<Setting> {
    const setting = await this.settingRepo.findOne(name);
    if (!setting) {
      throw new HttpException(`setting name:${name} not exist`, HttpStatus.NOT_FOUND);
    }
    return setting;
  }
}
