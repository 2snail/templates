import sayHi from './';

describe('index', () => {
  test('say', async cb => {
    const result = await sayHi('world');
    expect(result).toEqual('hello, world!');

    cb();
  });
});
