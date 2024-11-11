import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
  @service session;
  @service store;

  beforeModel() {
    this.session.prohibitAuthentication('dashboard');
  }

  model() {
    return this.store.findAll('roast');
  }
}
