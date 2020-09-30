import { Generator, winPath } from '@umijs/utils';
import { join, basename } from 'path';
import shell from 'shelljs';

export default class AppGenerator extends Generator {
  async writing() {
    const cwd = winPath(this.cwd);
    const packageName = this.args.name || basename(cwd);

    const ss = {
      context: {
        version: require('../../package').version,
        siteMode: this.args.site,
        packageName,
      },
      path: join(__dirname, '../../tpls/Appgenerator'),
      target: this.cwd,
    };

    console.log('xxx:', ss);
    shell.echo('hello');
    shell.echo(shell.pwd());
    shell.ls('.').forEach(file => console.log(file));

    await this.copyDirectory(ss);

    shell.ls('.').forEach(file => console.log(file));
  }
}
