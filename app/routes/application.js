import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationRoute extends Route {
  @service session;

  async beforeModel(transition) {
    await this.session.setup();
  }
}
