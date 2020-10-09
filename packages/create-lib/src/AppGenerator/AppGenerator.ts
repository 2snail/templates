import { Generator, winPath } from '@umijs/utils';
import { join, basename } from 'path';

export default class AppGenerator extends Generator {
  async writing() {
    const cwd = winPath(this.cwd);
    const packageName =
      this.args.name || this.args.packageName || basename(cwd);

    return await this.copyDirectory({
      context: {
        ...this.args,
        packageName,
      },
      path: join(__dirname, '../../tpls/AppGenerator'),
      target: this.cwd,
    });
  }
}
