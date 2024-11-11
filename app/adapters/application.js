import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3001/api';
  namespace = 'v1';
  @service session;

  @computed(
    'session.data.authenticated.token',
    'session.data.token',
    'session.isAuthenticated',
  )
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = this.session.data.authenticated.token;
    }

    return headers;
  }
}
