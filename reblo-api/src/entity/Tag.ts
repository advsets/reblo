/**
 * Category entity.
 * @description 标签数据模型
 * @author advsets <https://github.com/advsets>
 */

import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Post} from './Post';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 标签名称
  @Column()
  name: string;

  // 标签别名
  @Column()
  alias: string;

  // 标签描述
  @Column()
  description: string;

  // 拓展字段
  @Column('simple-json')
  extends: Array<{ name: string, value: string }>;

  // 标签文章
  @ManyToMany(_type => Post, {
    cascadeInsert: true,
    cascadeUpdate: true
  })
  @JoinTable()
  posts: Post[];

  // 创建时间
  @CreateDateColumn()
  createdAt: Date;

  // 更新时间
  @UpdateDateColumn()
  updatedAt: Date;

}
