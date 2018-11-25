import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';
import {SettingService} from '../services/setting.service';
import {ISetting} from '../interfaces/setting.interface';

@Controller()
export class SettingController {
  constructor(
    @Inject(SettingService) private readonly settingServ: SettingService
  ) {
  }

  @Get('/setting')
  async fetchAll() {
    return this.settingServ.fetchAll();
  }

  @Get('/setting/:name')
  async fetchOne(@Param('name') name: string) {
    return this.settingServ.fetchOne(name);
  }

  @Post('/setting')
  @UseGuards(AuthorizeGuard)
  async create(@Body() settingInput: ISetting) {
    return await this.settingServ.create(settingInput);
  }

  @Put('/setting/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('name') name: string, @Body() settingInput: ISetting) {
    return await this.settingServ.update(name, settingInput);
  }

  @Delete('/setting/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('name') name: string) {
    return await this.settingServ.delete(name);
  }
}
