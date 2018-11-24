/**
 * Notice.
 * @description 通知数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({comment: '通知内容'})
  content: string;

  @Column({type: 'tinyint', comment: '通知状态 -> 0:草稿中, 1:已发布'})
  status: number;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
