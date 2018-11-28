import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';
import {CategoryService} from '../services/category.service';
import {ICategoryCreate, ICategoryUpdate} from '../interfaces/category.interface';

@Controller()
export class CategoryController {
  constructor(
    @Inject(CategoryService) private readonly categoryServ: CategoryService
  ) {
  }

  @Get('/category')
  async fetchAll() {
    return await this.categoryServ.fetchAll();
  }

  @Get('/category/:id')
  async fetchOne(@Param('id') id: number) {
    return await this.categoryServ.fetchOne(id);
  }

  @Post('/category')
  @UseGuards(AuthorizeGuard)
  async create(@Body() categoryInput: ICategoryCreate) {
    return await this.categoryServ.create(categoryInput);
  }

  @Put('/category/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number, @Body() categoryInput: ICategoryUpdate) {
    return await this.categoryServ.update(id, categoryInput);
  }

  @Delete('/category/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
    return await this.categoryServ.delete(id);
  }
}
