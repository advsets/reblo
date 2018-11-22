/**
 * Relation.
 * @description 项目数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Metadata {
  @PrimaryGeneratedColumn('increment', {type: 'int', comment: '项目主键'})
  id: number;

  @Column({length: 200, comment: '名称'})
  name: string;

  @Column({length: 200, comment: '缩略名'})
  slug: string;

  @Column({length: 200, comment: '项目描述'})
  description: string;

  @Column({length: 48, comment: '项目类型-分类/标签/链接'})
  type: string;

  @Column({comment: '所属个数'})
  count: number;

  @Column({comment: '项目排序'})
  order: number;

  @Column({type: 'simple-json', comment: '拓展字段'})
  extends: any;
}
