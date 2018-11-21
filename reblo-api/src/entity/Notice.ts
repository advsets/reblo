/**
 * NoticeEntity.
 * @description 通知数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 通知内容
  @Column()
  content: string;

  // 通知状态
  @Column()
  status: number;

  // 创建时间
  @CreateDateColumn()
  createdAt: Date;

  // 更新时间
  @UpdateDateColumn()
  updatedAt: Date;
}
