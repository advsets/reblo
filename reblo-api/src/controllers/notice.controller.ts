import {Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';
import {INoticeCreate, INoticeFinder} from '../interfaces/notice.interface';
import {NoticeService} from '../services/notice.service';

@Controller()
export class NoticeController {
  constructor(
    @Inject(NoticeService) private readonly noticeServ: NoticeService
  ) {
  }

  @Get('/notice')
  async fetchAll(@Query() input: INoticeFinder) {
    return await this.noticeServ.fetchAll(input);
  }

  @Get('/notice/:id')
  async fetchOne(@Param('id') id: number) {
    return await this.noticeServ.fetchOne(id);
  }

  @Post('/notice')
  @UseGuards(AuthorizeGuard)
  async create(@Body() noticeInput: INoticeCreate) {
    return await this.noticeServ.create(noticeInput);
  }

  @Put('/notice/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number, @Body() noticeInput: INoticeCreate) {
    return await this.noticeServ.update(id, noticeInput);
  }

  @Delete('/notice/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
    return await this.noticeServ.delete(id);
  }
}
