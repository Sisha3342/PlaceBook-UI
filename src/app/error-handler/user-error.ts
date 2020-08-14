export class UserError implements Error {
  name;
  message;
  code;

  constructor() {
    this.name = 'user-error';
    this.message = 'Your session has expired';
    this.code = 401;
  }
}
