import { defineConfig } from 'dumi';

const title = 'templates';
const virtualPath = `/${title}/`;
export default defineConfig({
  title,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: virtualPath,
  publicPath: virtualPath,
  mode: 'site',
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/2snail/templates' },
      {
        title: 'Change Log',
        path: 'https://github.com/2snail/templates/releases',
      },
    ],
    'zh-CN': [
      null,
      { title: '源码', path: 'https://github.com/2snail/templates' },
      {
        title: '变更日志',
        path: 'https://github.com/2snail/templates/releases',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
