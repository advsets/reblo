/**
 * Visitor.
 * @description 访客数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Visitor {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;

  @Column({type: 'simple-json', nullable: true, comment: '访客信息'})
  info: any;
}
