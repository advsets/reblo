/**
 * Relation.
 * @description 配置数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, Column, TreeParent, TreeChildren, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('increment', {type: 'int', comment: '内容主键'})
  id: number;

  @PrimaryColumn({comment: '内容主键'})
  cid: number;

  @Column()
  content: string;

  @Column()
  thirdId: number;

  @Column()
  stick: boolean;

  @Column()
  likes: number;

  ip: string;
  ipLocation: string;
  agent: string;
  status: string;

  @TreeParent({})
  parent: Comment;

  @TreeChildren({})
  children: Comment[];

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;

  @Column({type: 'simple-json', comment: '评论作者'})
  author: {name: string, email: string, site: string, uid: number};

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: any;

}
