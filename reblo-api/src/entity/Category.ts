/**
 * Category.
 * @description 分类数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({length: 100, comment: '分类名称'})
  name: string;

  @Column({length: 48, comment: '分类路径'})
  alias: string;

  @Column({comment: '分类文章数'})
  count: number;

  @Column({comment: '分类描述'})
  description: string;

  @Column({type: 'simple-json', comment: '分类拓展'})
  extends: Array<{ name: string, value: string }>;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
