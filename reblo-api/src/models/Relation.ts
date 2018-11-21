/**
 * Relation.
 * @description 配置数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Relation {
  @PrimaryColumn({comment: '内容主键'})
  cid: number;

  @PrimaryColumn({comment: '项目主键'})
  mid: number;
}
