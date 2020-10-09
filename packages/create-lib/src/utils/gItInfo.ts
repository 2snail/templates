import shell from 'shelljs';
import IGenOption from './IGenOption';

export function getGitInfo(): IGenOption {
  let gitInfo: IGenOption = {};

  if (!shell.which('git')) {
    console.log('have no git!');
    return gitInfo;
  }

  gitInfo.userName = getConfig('user.name');
  gitInfo.userEmail = getConfig('user.email');
  gitInfo.originUrl = getConfig('remote.origin.url');

  return tryParseOriginUrl(gitInfo);
}

function tryParseOriginUrl(gitInfo: IGenOption) {
  if (!gitInfo.originUrl) {
    return gitInfo;
  }

  const reg = /.*\/(?<org>\w+)\/(?<pkg>\w+)\.git$/i;
  const match = gitInfo.originUrl.match(reg);

  if (match?.groups) {
    gitInfo.organization = match.groups.org;
    gitInfo.packageName = match.groups.pkg;
  }

  return gitInfo;
}

function getConfig(key: string) {
  const result = shell.exec(`git config --get ${key}`);
  return result.code === 0 ? result.stdout.trim() : undefined;
}
