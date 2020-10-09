import { yargs } from '@umijs/utils';

export default interface IGenOption {
  version?: string;
  cwd?: string;
  license?: string;
  userName?: string;
  userEmail?: string;
  originUrl?: string;
  organization?: string;
  packageName?: string;
  bugsUrl?: string;
  homepage?: string;
}
