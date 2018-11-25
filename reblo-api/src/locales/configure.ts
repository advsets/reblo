import {ConfigurationOptions, __} from 'i18n';

export type I18nType = 'en-US' | 'zh-CN';

export interface I18nOptions extends ConfigurationOptions {
  i18n: I18nType;
}

export const i18nOptions: ConfigurationOptions = {
  locales: ['zh-CN', 'en-US'],
  defaultLocale: 'zh-CN',
  directory: 'src/locales'
};

export const t = __;
