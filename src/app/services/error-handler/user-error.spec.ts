import { UserError } from './user-error';

describe('UserError', () => {
  it('should create an instance', () => {
    expect(new UserError()).toBeTruthy();
  });
});
