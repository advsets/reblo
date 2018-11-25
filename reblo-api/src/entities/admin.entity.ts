/**
 * Admin.
 * @description 管理员数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, PrimaryGeneratedColumn, CreateDateColumn, Column} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({unique: true, length: 24, nullable: false, comment: '管理员名'})
  username: string;

  @Column({unique: true, length: 200, nullable: false, comment: '用户邮箱'})
  email: string;

  @Column({nullable: false, comment: '用户密码'})
  password: string;

  @Column({length: 48, comment: '用户昵称'})
  nickname: string;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @Column({type: 'datetime', comment: '最后登入时间'})
  loggedAt: Date;
}
