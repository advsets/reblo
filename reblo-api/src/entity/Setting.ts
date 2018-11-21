/**
 * SettingEntity.
 * @description 配置数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Setting {
  // 设置键名
  @PrimaryColumn()
  key: string;

  // 设置值
  @Column()
  value: string;

  // 设置描述
  @Column()
  description: string;
}
