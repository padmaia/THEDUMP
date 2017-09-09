import '../index';

jest.mock('../server', () => ({
  listen: jest.fn((port, cb) => cb()),
}));

describe('server entry', () => {
  it('should start the server on port 3000', () => {
    const server = require('../server'); // eslint-disable-line global-require
    expect(server.listen).toHaveBeenCalledTimes(1);
    expect(server.listen.mock.calls[0][0]).toBe(3000);
  });
});
