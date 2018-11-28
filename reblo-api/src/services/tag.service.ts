import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Tag} from '../entities/tag.entity';
import {ITagCreate, ITagModel, ITagUpdate} from '../interfaces/tag.interface';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepo: Repository<Tag>,
  ) {
  }

  async create(tagInput: ITagCreate): Promise<void> {
    if (!tagInput.name) {
      throw new HttpException('tag name can\'t null', HttpStatus.NOT_ACCEPTABLE);
    }
    if (typeof tagInput.name !== 'string') {
      throw new HttpException('tag name should be string', HttpStatus.NOT_ACCEPTABLE);
    }
    if (!tagInput.alias) {
      throw new HttpException('tag alias can\'t null', HttpStatus.NOT_ACCEPTABLE);
    }
    if (typeof tagInput.alias !== 'string') {
      throw new HttpException('tag alias should be string', HttpStatus.NOT_ACCEPTABLE);
    }
    if (await await this.tagRepo.findOne({where: {name: tagInput.name}})) {
      throw new HttpException('tag name already exists', HttpStatus.CONFLICT);
    }

    await this.tagRepo.save(this.tagRepo.create(tagInput));
  }

  async update(id: number, tagInput: ITagUpdate): Promise<void> {
    const tag = await this.tagRepo.findOne(id);
    if (!tag) {
      throw new HttpException(`tag id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.tagRepo.update(id, tagInput);
  }

  async delete(id: number): Promise<void> {
    const tag = await this.tagRepo.findOne(id);
    if (!tag) {
      throw new HttpException(`tag id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.tagRepo.remove(tag);
  }

  async fetchAll(): Promise<ITagModel[]> {
    return await this.tagRepo.find();
  }

  async fetchOne(id: number): Promise<ITagModel> {
    const tag = await this.tagRepo.findOne(id);
    if (!tag) {
      throw new HttpException(`tag id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    return tag;
  }
}
