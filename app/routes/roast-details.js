import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RoastDetailsRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('roast', params.roast_id);
  }
}
