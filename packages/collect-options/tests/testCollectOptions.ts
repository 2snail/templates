export default function testCollectOptions(collectOptions: Function) {
  test('collectOptions', async cb => {
    const options = await collectOptions();
    expect(options).toEqual({});
    cb();
  });
}
