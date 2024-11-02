import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  @inject session;

  @computed(
    'session.data.authenticated.token',
    'session.data.token',
    'session.isAuthenticated',
  )
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = this.session.data.token;
    }

    return headers;
  }
}
