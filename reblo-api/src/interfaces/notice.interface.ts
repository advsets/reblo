import {IPagination} from './common.interface';

export interface INoticeModel {
  id: number;
  content: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface INoticePagination extends IPagination {
  rows: INoticeModel[];
}

export interface INoticeCreate {
  content: string;
  status?: 0 | 1;
}

export interface INoticeUpdate {
  content?: string;
  status?: 0 | 1;
}

export interface INoticeFinder {
  word?: string;
  page?: number;
  pageSize?: number;
  all: boolean;
}
