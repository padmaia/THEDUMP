import {
  serializeUser,
  deserializeUser,
} from '../auth';

describe('auth', () => {
  describe('serializeUser', () => {
    it('should just return the user obj', () => {
      const cb = jest.fn();
      const user = {};
      serializeUser(user, cb);
      expect(cb).toHaveBeenLastCalledWith(null, user);
    });
  });

  describe('deserializeUser', () => {
    it('should just return the user obj', () => {
      const cb = jest.fn();
      const user = {};
      deserializeUser(user, cb);
      expect(cb).toHaveBeenLastCalledWith(null, user);
    });
  });
});
