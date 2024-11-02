import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ForgotPasswordController extends Controller {
  @tracked email;

  @action
  updateEmail(e) {
    this.email = e.target.value;
  }

  @action
  async sendResetPassword(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/v1/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user: { email: this.email } }),
    });
    const data = await response.json();
    console.log(data);
  }
}
