import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service session;
  @service auth;
  // @tracked user;

  @action
  async checkToken() {
    const token = this.session.data.authenticated.token;
    const response = await fetch(
      'http://localhost:3001/api/v1/is-authenticated',
      {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      },
    );
    if (!response.ok) {
      this.session.invalidate();
    }
    console.log(response);
  }

  // updateUser() {
  //   if (this.session.isAuthenticated) {
  //     this.user = this.session.data.authenticated.responseData.data.email;
  //   } else this.user = null;
  // }
}
