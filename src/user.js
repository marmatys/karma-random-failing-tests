class UserService {

  constructor(http) {
    this.http = http;
  }

  retrieveUser() {
    const user = this.http.user();
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  get currentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

}
