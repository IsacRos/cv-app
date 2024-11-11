import Service, { service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthService extends Service {
  @service session;
  @service router;

  async signUp(signUpForm) {
    const apiUrl = 'http://localhost:3001/api/v1/signup';

    const reqBody = JSON.stringify({ registration: signUpForm });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reqBody,
    });

    if (response.ok) {
      console.log(response);
      return true;
    } else {
      const err = response.json();
      console.error(err);
    }
  }

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  getUser() {
    return this.session.data.authenticated.responseData.data;
  }
}
