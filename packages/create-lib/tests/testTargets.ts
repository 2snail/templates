import testReadme from './testReadme';
import testPackage from './testPackage';

export default function testTargets(cwd: string) {
  testReadme(cwd);
  testPackage(cwd);
}
