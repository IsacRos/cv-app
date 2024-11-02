import Service, { service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service session;
}
