import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';

@Controller()
export class PostController {
  constructor() {
  }

  @Get('/post')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
  }

  @Get('/post/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
  }

  @Post('/post')
  @UseGuards(AuthorizeGuard)
  async create() {
  }

  @Put('/post/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number) {
  }

  @Delete('/post/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
  }
}
