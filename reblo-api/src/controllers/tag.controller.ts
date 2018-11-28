import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {AuthorizeGuard} from '../guards/authorize.guard';
import {TagService} from '../services/tag.service';
import {ITagCreate, ITagUpdate} from '../interfaces/tag.interface';

@Controller()
export class TagController {
  constructor(
    @Inject(TagService) private readonly tagServ: TagService
  ) {
  }

  @Get('/tag')
  @UseGuards(AuthorizeGuard)
  async fetchAll() {
    return await this.tagServ.fetchAll();
  }

  @Get('/tag/:id')
  @UseGuards(AuthorizeGuard)
  async fetchOne(@Param('id') id: number) {
    return await this.tagServ.fetchOne(id);
  }

  @Post('/tag')
  @UseGuards(AuthorizeGuard)
  async create(@Body() tagInput: ITagCreate) {
    return await this.tagServ.create(tagInput);
  }

  @Put('/tag/:id')
  @UseGuards(AuthorizeGuard)
  async update(@Param('id') id: number, @Body() tagInput: ITagUpdate) {
    return await this.tagServ.update(id, tagInput);
  }

  @Delete('/tag/:id')
  @UseGuards(AuthorizeGuard)
  async delete(@Param('id') id: number) {
    return await this.tagServ.delete(id);
  }
}
