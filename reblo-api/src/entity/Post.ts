/**
 * ArticleEntity.
 * @description 文章数据模型
 * @author advsets <https://github.com/advsets>
 */

import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Tag} from './Tag';
import {Category} from './Category';
import {User} from './User';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 文章标题
  @Column()
  title: string;

  // 文章摘要
  @Column()
  summary: string;

  // 文章关键词-seo
  @Column('simple-array')
  keywords: string[];

  // 文章浏览信息
  @Column('simple-json')
  meta: { views: number, likes: number, comments: number };

  // 文章内容
  @Column()
  content: string;

  // 文章缩略图
  @Column()
  thumbnail: string;

  // 文章格式
  @Column()
  format: number;

  // 文章状态
  @Column()
  status: number;

  // 文章访问性
  @Column()
  public: number;

  // 文章来源
  @Column()
  source: number;

  // 创建时间
  @CreateDateColumn()
  createdAt: Date;

  // 更新时间
  @UpdateDateColumn()
  updatedAt: Date;

  // 作者
  @ManyToOne(_type => User, user => user.id)
  author: User;

  // 分类
  @ManyToOne(_type => Category, category => category.posts)
  category: Category;

  // 标签
  @ManyToMany(_type => Tag)
  @JoinTable()
  tags: Tag[];
}
