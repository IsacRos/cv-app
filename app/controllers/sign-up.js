import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SignUpController extends Controller {
  @service auth;
  @tracked formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  @tracked registered = false;

  constructor() {
    super(...arguments);
    this.registered = false;
  }

  @action
  async register() {
    console.log('HEEJ');
  }

  @action
  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.formData[id] = value;
  }

  @action
  handleSubmit(e) {
    e.preventDefault();
    this.auth.signUp(this.formData);
    this.registered = true;
  }
}
