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
    return this.settingServ.fetchAllSetting();
  }

  @Get('/setting/:name')
  async fetchOne(@Param('name') name: string) {
    return this.settingServ.fetchOneByName(name);
  }

  @Post('/setting')
  @UseGuards(AuthorizeGuard)
  async createAdmin(@Body() settingInput: ISetting) {
    return await this.settingServ.createSetting(settingInput);
  }

  @Put('/setting/:id')
  @UseGuards(AuthorizeGuard)
  async updateAdmin(@Param('name') name: string, @Body() settingInput: ISetting) {
    return await this.settingServ.updateSetting(name, settingInput);
  }

  @Delete('/setting/:id')
  @UseGuards(AuthorizeGuard)
  async deleteAdmin(@Param('name') name: string) {
    return await this.settingServ.deleteSetting(name);
  }
}
