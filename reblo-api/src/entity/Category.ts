/**
 * CategoryEntity.
 * @description 分类数据模型
 * @author advsets <https://github.com/advsets>
 */

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  TreeChildren,
  TreeParent,
  OneToMany
} from 'typeorm';
import {Post} from './Post';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 分类名称
  @Column()
  name: string;

  // 分类别名
  @Column()
  alias: string;

  // 分类描述
  @Column()
  description: string;

  // 分类拓展
  @Column('simple-json')
  extends: Array<{ name: string, value: string }>;

  // 父级分类
  @TreeParent()
  parent: Category;

  // 下级分类
  @TreeChildren()
  children: Category[];

  // 创建时间
  @CreateDateColumn()
  createdAt: Date;

  // 更新时间
  @UpdateDateColumn()
  updatedAt: Date;

  // 分类文章
  @OneToMany(_type => Post, post => post.category)
  posts: Post[];
}
