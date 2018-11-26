import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';

@Controller()
export class CommentController {
  constructor() {
  }

  @Get('/comment')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
  }

  @Get('/comment/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
  }

  @Post('/comment')
  @UseGuards(AuthorizeGuard)
  async create() {
  }

  @Put('/comment/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number) {
  }

  @Delete('/comment/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
  }
}
