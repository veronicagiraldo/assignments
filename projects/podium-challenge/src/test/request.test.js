const request = require('./request')

const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Kaley', () => {
    const author = 'Kaley';
    expect(author).toBe('Kaley');
  });

  test('User is Fay', () => {
    const author = 'Fay';
    expect(author).toBe('Fay');
  });
});


test('User fetched name should be Kaley Schiller', async () => {
  expect.assertions(1);
  const data = functions.getData();
  expect(data.author).toEqual('Kaley');
});