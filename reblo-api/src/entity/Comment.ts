/**
 * CommentEntity.
 * @description 评论数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;
}
