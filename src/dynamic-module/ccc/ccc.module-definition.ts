import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface CccModuleOptions {
  aaa: number;
  bbb: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CccModuleOptions>().build();

// forRoot
export const {
  ConfigurableModuleClass: ConfigurableModuleClass1,
  MODULE_OPTIONS_TOKEN: MODULE_OPTIONS_TOKEN1,
} = new ConfigurableModuleBuilder<CccModuleOptions>()
  .setClassMethodName('forRoot')
  .build();

// 修改模块定义
export const {
  ConfigurableModuleClass: ConfigurableModuleClass2,
  MODULE_OPTIONS_TOKEN: MODULE_OPTIONS_TOKEN2,
  OPTIONS_TYPE: OPTIONS_TYPE2,
  ASYNC_OPTIONS_TYPE: ASYNC_OPTIONS_TYPE2,
} = new ConfigurableModuleBuilder<CccModuleOptions>()
  .setClassMethodName('register')
  .setExtras(
    {
      isGlobal: true,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();
