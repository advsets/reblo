import {Body, Controller, Get, Inject, Param, Post, Put, Req} from '@nestjs/common';
import {AdminService} from '../services/admin.service';
import {IAdminCreate, IAdminUpdate} from '../interfaces/admin.interface';

@Controller()
export class AdminController {
  constructor(
    @Inject(AdminService) private readonly adminServ: AdminService
  ) {
  }

  @Get('/admin')
  async fetchAll() {
    return this.adminServ.fetchAll();
  }

  @Get('/admin/:id')
  async fetchOne(@Param('id') id: number) {
    return this.adminServ.fetchOneById(id);
  }

  @Post('/admin')
  async createAdmin(@Body() adminInput: IAdminCreate) {
    return await this.adminServ.createAdmin(adminInput);
  }

  @Put('/admin/:id')
  async updateAdmin(@Param('id') id: number, @Body() adminInput: IAdminUpdate) {
    return await this.adminServ.updateAdmin(id, adminInput);
  }
}
