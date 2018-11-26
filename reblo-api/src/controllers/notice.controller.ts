import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';

@Controller()
export class NoticeController {
  constructor() {
  }

  @Get('/notice')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
  }

  @Get('/notice/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
  }

  @Post('/notice')
  @UseGuards(AuthorizeGuard)
  async create() {
  }

  @Put('/notice/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number) {
  }

  @Delete('/notice/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
  }
}
