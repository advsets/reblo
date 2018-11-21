/**
 * Relation.
 * @description 内容数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn('increment', {type: 'int', comment: '内容主键'})
  id: number;

  @Column({length: 200, comment: '内容标题'})
  title: string;

  @Column({length: 200, comment: '内容缩略名'})
  slug: string;

  @Column({length: 48, comment: '内容类型'})
  type: string;

  @Column({comment: '项目排序'})
  order: number;

  @Column({type: 'simple-json', comment: '内容元信息'})
  meta: { views: number, likes: number, comments: number };

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: Array<{ name: string, value: string }>;
}
