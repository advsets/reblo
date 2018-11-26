import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class PostService {
  constructor() {
  }

  async create(): Promise<void> {
  }

  async update(): Promise<void> {
  }

  async delete(): Promise<void> {
  }

  async fetchAll(): Promise<{}[]> {
    return [];
  }

  async fetchOne(name: string): Promise<{}> {
    return null;
  }
}
