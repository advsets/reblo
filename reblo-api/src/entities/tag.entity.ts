/**
 * Tag.
 * @description 标签数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({length: 100, comment: '标签名称'})
  name: string;

  @Column({length: 48, comment: '标签别名'})
  alias: string;

  @Column({length: 200, comment: '标签描述'})
  description: string;

  @Column({comment: '标签文章数', default: 0})
  count: number;

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: Array<{ name: string, value: string }>;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;

}
