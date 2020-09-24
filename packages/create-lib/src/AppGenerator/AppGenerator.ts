import { Generator, winPath } from '@umijs/utils';
import { join, basename } from 'path';

export default class AppGenerator extends Generator {
  async writing() {
    const cwd = winPath(this.cwd);
    const packageName = this.args.name || basename(cwd);

    return await this.copyDirectory({
      context: {
        version: require('../../package').version,
        siteMode: this.args.site,
        packageName,
      },
      path: join(__dirname, '../../tpls/Appgenerator'),
      target: this.cwd,
    });
  }
}
