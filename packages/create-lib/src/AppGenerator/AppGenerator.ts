import {
  Generator,
  winPath,
  chalk,
  mkdirp,
  Mustache,
  glob,
} from '@umijs/utils';
import shell from 'shelljs';

import { copyFileSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, relative, join, basename } from 'path';

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

  copyTpl(opts: { templatePath: string; target: string; context: object }) {
    const tpl = readFileSync(opts.templatePath, 'utf-8');
    const content = Mustache.render(tpl, opts.context);
    mkdirp.sync(dirname(opts.target));
    console.log(`${chalk.green('Write:')} ${relative(this.cwd, opts.target)}`);
    writeFileSync(opts.target, content, 'utf-8');
  }

  copyDirectory(opts: { path: string; context: object; target: string }) {
    const files = glob.sync('**/*', {
      cwd: opts.path,
      dot: true,
      ignore: ['**/node_modules/**'],
    });
    shell.ls(opts.path).forEach(file => console.log(file));
    console.log('files:', files);
    files.forEach(file => {
      const absFile = join(opts.path, file);
      if (statSync(absFile).isDirectory()) return;
      if (file.endsWith('.tpl')) {
        this.copyTpl({
          templatePath: absFile,
          target: join(opts.target, file.replace(/\.tpl$/, '')),
          context: opts.context,
        });
      } else {
        console.log(`${chalk.green('Copy: ')} ${file}`);
        const absTarget = join(opts.target, file);
        mkdirp.sync(dirname(absTarget));
        copyFileSync(absFile, absTarget);
      }
    });
  }
}
