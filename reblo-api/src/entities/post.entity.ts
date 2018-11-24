/**
 * Post.
 * @description 文章数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({length: 100, comment: '文章标题'})
  title: string;

  @Column({length: 250, comment: '文章摘要'})
  summary: string;

  @Column({type: 'simple-array', comment: '文章关键字-SEO'})
  keywords: string[];

  @Column({type: 'simple-json', comment: '游客浏览信息'})
  meta: { views: number, likes: number, comments: number };

  @Column({type: 'text', comment: '文章内容'})
  content: string;

  @Column({comment: '文章缩略图'})
  thumbnail: string;

  @Column({type: 'tinyint', comment: '文章格式 -> 0:markdown, 1:html'})
  format: number;

  @Column({type: 'tinyint', comment: '文章状态 -> -1:回收站, 0:草稿中, 1: 已发布'})
  status: number;

  @Column({type: 'tinyint', comment: '文章访问性 -> -1:私密, 0:需要密码, 1: 公开'})
  public: number;

  @Column({type: 'tinyint', comment: '文章来源 -> 0:原创, 1:原创, 2: 混合'})
  source: number;

  @Column({comment: '分类ID'})
  categoryId: number;

  @Column({type: 'simple-array', comment: '标签IDS'})
  tagIds: number[];

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: Array<{ name: string, value: string }>;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
