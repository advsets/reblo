/**
 * Comment.
 * @description 评论表
 * @author advsets <https://github.com/advsets>
 */

import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({comment: '第三方评论ID'})
  thirdId: number;

  @Column({comment: '父级评论 -> 0:顶级评论, x:父级评论ID'})
  parentId: number;

  @Column({comment: '评论文章ID -> 0:系统留言, x:指定文章ID'})
  postId: number;

  @Column({comment: '评论内容'})
  content: string;

  @Column({comment: '是否置顶'})
  stick: boolean;

  @Column({comment: '被点赞数'})
  likes: number;

  @Column({comment: 'IP地址'})
  ip: string;

  @Column({comment: 'IP实际地址'})
  ipLocation: string;

  @Column({comment: '用户来源'})
  agent: string;

  @Column({comment: '评论状态 => 0:待审核,1:通过正常,-1:已删除,-2:垃圾评论'})
  status: string;

  @Column({type: 'simple-json', comment: '评论作者'})
  author: { name: string, email: string, site: string, aid: number };

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: Array<{ name: string, value: string }>;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
