/**
 * Setting.
 * @description 配置数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class SettingEntity {
  @PrimaryColumn({length: 48, comment: '配置名称'})
  name: string;

  @Column({type: 'simple-json', comment: '配置内容'})
  value: any;

  @Column({comment: '配置描述'})
  description: string;
}
