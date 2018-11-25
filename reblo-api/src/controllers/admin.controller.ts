import {Body, Controller, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AdminService} from '../services/admin.service';
import {IAdminCreate, IAdminUpdate, ILoginInput} from '../interfaces/admin.interface';
import {AuthorizeGuard} from '../guards/authorize.guard';

@Controller()
export class AdminController {
  constructor(
    @Inject(AdminService) private readonly adminServ: AdminService
  ) {
  }

  @Post('/login')
  async login(@Body() loginInput: ILoginInput) {
    const {account, password} = loginInput;
    return await this.adminServ.adminLogin(account, password);
  }

  @Get('/admin')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
    return this.adminServ.fetchAll();
  }

  @Get('/admin/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
    return this.adminServ.fetchOneById(id);
  }

  @Post('/admin')
  @UseGuards(AuthorizeGuard)
  async createAdmin(@Body() adminInput: IAdminCreate) {
    return await this.adminServ.createAdmin(adminInput);
  }

  @Put('/admin/:id')
  @UseGuards(AuthorizeGuard)
  async updateAdmin(@Param('id') id: number, @Body() adminInput: IAdminUpdate) {
    return await this.adminServ.updateAdmin(id, adminInput);
  }
}
