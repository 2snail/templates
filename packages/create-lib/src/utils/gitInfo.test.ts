import { getGitInfo } from './gItInfo';

describe('gitInfo', () => {
  test('getGitInfo', () => {
    const gitInfo = getGitInfo();

    if (gitInfo.userName) {
      expect(gitInfo).toEqual({
        userName: 'zhangaz1',
        userEmail: 'zhangaz1@hotmail.com',
        originUrl: 'https://github.com/2snail/templates.git',
        organization: '2snail',
        packageName: 'templates',
      });
    }
  });
});
