export class User {
  login: string;
  password: string;

  constructor(login: string, password: string) {
    this.password = password;
    this.login = login;
  }

}
