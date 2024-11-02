import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service auth;
  @service session;
  @tracked error;
  @tracked email = '';
  @tracked password = '';

  @action
  async authenticate(event) {
    event.preventDefault();

    const authenticator = 'authenticator:token';
    try {
      await this.session.authenticate(authenticator, this.email, this.password);
    } catch (err) {
      this.error = err;
      console.log(err);
    }
  }

  @action
  updateForm(attr, event) {
    this[attr] = event.target.value;
  }
}
