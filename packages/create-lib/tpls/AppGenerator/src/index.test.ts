import sayHi from './';

describe('index', () => {
  test('say', async cb => {
    const result = await sayHi('wolrd');
    expect(result).toEqual('hello, world!');

    cb();
  });
});
