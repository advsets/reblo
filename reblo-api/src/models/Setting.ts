/**
 * Setting.
 * @description 配置数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Setting {
  @PrimaryColumn({length: 48, comment: '配置名称'})
  name: string;

  @Column({type: 'text', comment: '配置内容'})
  value: string;

  @Column({comment: '配置描述'})
  description: string;

  @Column({default: 0, comment: '配置所属用户,默认为0(全局配置)'})
  user: number;
}
