import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
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
    return await this.adminServ.login(account, password);
  }

  @Get('/admin')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
    return this.adminServ.fetchAll();
  }

  @Get('/admin/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
    return this.adminServ.fetchOne(id);
  }

  @Post('/admin')
  @UseGuards(AuthorizeGuard)
  async create(@Body() adminInput: IAdminCreate) {
    return await this.adminServ.create(adminInput);
  }

  @Put('/admin/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number, @Body() adminInput: IAdminUpdate) {
    return await this.adminServ.update(id, adminInput);
  }

  @Delete('/admin/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
    return await this.adminServ.delete(id);
  }
}
