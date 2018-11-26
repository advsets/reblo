import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class EmailService {
  constructor() {
  }

  async sendEmail(): Promise<void> {
  }
}
