import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';

@Controller()
export class CategoryController {
  constructor() {
  }

  @Get('/category')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
  }

  @Get('/category/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
  }

  @Post('/category')
  @UseGuards(AuthorizeGuard)
  async create() {
  }

  @Put('/category/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number) {
  }

  @Delete('/category/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
  }
}
