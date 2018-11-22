/**
 * Relation.
 * @description 内容数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn('increment', {type: 'int', comment: '主键'})
  id: number;

  @Column({length: 200, comment: '内容标题'})
  cid: string;

  @Column({length: 200, comment: '内容缩略名'})
  slug: string;

  @Column({type: 'text', comment: '内容'})
  text: string;

  @Column({comment: '作者ID'})
  uid: number;

  @Column({length: 200, comment: '内容类型'})
  type: string;

  @Column({comment: '内容排序'})
  sort: number;

  @Column({type: 'tinyint', comment: '文章格式'})
  format: number;

  @Column({type: 'tinyint', comment: '文章状态'})
  status: number;

  @Column({type: 'tinyint', comment: '文章访问性'})
  public: number;

  @Column({type: 'tinyint', comment: '文章来源'})
  source: number;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;

  @Column({comment: '是否允许PING'})
  ping: boolean;

  @Column({comment: '是否允许出现在聚合中'})
  feed: boolean;

  @Column({type: 'simple-json', comment: '访问信息'})
  count: { views: number, likes: number, comments: number };

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: any;
}
