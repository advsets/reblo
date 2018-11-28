import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Category} from '../entities/category.entity';
import {ICategoryCreate, ICategoryUpdate} from '../interfaces/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {
  }

  async create(categoryInput: ICategoryCreate): Promise<void> {
    if (!categoryInput.name) {
      throw new HttpException('category name can\'t null', HttpStatus.NOT_ACCEPTABLE);
    }
    if (typeof categoryInput.name !== 'string') {
      throw new HttpException('category name should be string', HttpStatus.NOT_ACCEPTABLE);
    }
    if (!categoryInput.alias) {
      throw new HttpException('category alias can\'t null', HttpStatus.NOT_ACCEPTABLE);
    }
    if (typeof categoryInput.alias !== 'string') {
      throw new HttpException('category alias should be string', HttpStatus.NOT_ACCEPTABLE);
    }
    if (await await this.categoryRepo.findOne({where: {name: categoryInput.name}})) {
      throw new HttpException('category name already exists', HttpStatus.CONFLICT);
    }

    await this.categoryRepo.save(this.categoryRepo.create(categoryInput));
  }

  async update(id: number, categoryInput: ICategoryUpdate): Promise<void> {
    const category = await this.categoryRepo.findOne(id);
    if (!category) {
      throw new HttpException(`category id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.categoryRepo.update(id, categoryInput);
  }

  async delete(id: number): Promise<void> {
    const category = await this.categoryRepo.findOne(id);
    if (!category) {
      throw new HttpException(`category id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    await this.categoryRepo.remove(category);
  }

  async fetchAll(): Promise<{}[]> {
    return await this.categoryRepo.find();
  }

  async fetchOne(id: number): Promise<{}> {
    const category = await this.categoryRepo.findOne(id);
    if (!category) {
      throw new HttpException(`category id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    return category;
  }
}
