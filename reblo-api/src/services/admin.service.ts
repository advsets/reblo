import {Injectable} from '@nestjs/common';
import {IAdminCreate, IAdminUpdate} from '../interfaces/admin.interface';

@Injectable()
export class AdminService {
  async create(admin: IAdminCreate): Promise<void> {
    // TODO 创建管理员
  }

  async update(admin: IAdminUpdate): Promise<void> {
    // TODO 更新管理员
  }
}
