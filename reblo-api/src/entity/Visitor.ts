/**
 * Visitor.
 * @description 访客数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Visitor {
  @PrimaryGeneratedColumn('increment', {comment: '主键'})
  id: number;
}
