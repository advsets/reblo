import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {Notice} from '../entities/notice.entity';
import {
  INoticeCreate, INoticeUpdate, INoticeFinder, INoticeModel, INoticePagination
} from '../interfaces/notice.interface';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepo: Repository<Notice>,
  ) {
  }

  async create(noticeInput: INoticeCreate): Promise<void> {
    if (!noticeInput.content) {
      throw new HttpException('notice content is not null', HttpStatus.NOT_ACCEPTABLE);
    }

    if (typeof noticeInput.content !== 'string') {
      throw new HttpException('notice should be string', HttpStatus.NOT_ACCEPTABLE);
    }

    await this.noticeRepo.save(this.noticeRepo.create(noticeInput));
  }

  async update(id: number, noticeInput: INoticeUpdate): Promise<void> {
    const notice = await this.noticeRepo.findOne(id);
    if (!notice) {
      throw new HttpException(`notice id:${id} not exist`, HttpStatus.NOT_FOUND);
    }

    await this.noticeRepo.update(id, noticeInput);
  }

  async delete(id: number): Promise<void> {
    const notice = await this.noticeRepo.findOne(id);
    if (!notice) {
      throw new HttpException(`notice id:${id} not exist`, HttpStatus.NOT_FOUND);
    }

    await this.noticeRepo.remove(notice);
  }

  async fetchAll({word = '', page = 1, pageSize = 10, all = false}: INoticeFinder): Promise<INoticePagination | INoticeModel[]> {
    if (pageSize < 0) {
      throw new HttpException(`pageSize has gt 0`, HttpStatus.NOT_FOUND);
    }

    if (all) {
      return await this.noticeRepo.createQueryBuilder('notice')
        .where(Like(`%${word}%`))
        .getMany();
    }
    const queryBuilder = this.noticeRepo.createQueryBuilder('notice')
      .where(Like(`%${word}%`))
      .orderBy('notice.id', 'DESC')
      .offset((page - 1) * pageSize)
      .limit(pageSize);
    const rows = await queryBuilder.getMany();
    const totalCount = await queryBuilder.getCount();
    return {page, pageSize, totalCount, totalPage: Math.ceil(totalCount / pageSize), rows};
  }

  async fetchOne(id: number): Promise<INoticeModel> {
    const notice = await this.noticeRepo.findOne(id);
    if (!notice) {
      throw new HttpException(`notice id:${id} not exist`, HttpStatus.NOT_FOUND);
    }
    return notice;
  }
}
