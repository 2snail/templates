import shell from 'shelljs';

export interface IGitInfo {
  userName?: string;
  userEmail?: string;
  originUrl?: string;
  organization?: string;
  packageName?: string;
  bugsUrl?: string;
}

export function getGitInfo(): IGitInfo {
  let gitInfo: IGitInfo = {};

  if (!shell.which('git')) {
    console.log('have no git!');
    return gitInfo;
  }

  gitInfo.userName = getConfig('user.name');
  gitInfo.userEmail = getConfig('user.email');
  gitInfo.originUrl = getConfig('remote.origin.url');

  return tryParseOriginUrl(gitInfo);
}

function tryParseOriginUrl(gitInfo: IGitInfo) {
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
