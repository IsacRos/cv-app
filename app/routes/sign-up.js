import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SignUpRoute extends Route {
  @service session;

  beforeModel() {
    this.session.prohibitAuthentication('dashboard');
  }

  resetController(controller, isExisting) {
    if (isExisting) {
      controller.set('registered', false);
    }
  }
}
