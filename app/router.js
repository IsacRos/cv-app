import EmberRouter from '@ember/routing/router';
import config from 'cv-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('forgot-password');
  this.route('sign-up');
  this.route('dashboard');
  this.route('roast-details', { path: 'roast-details/:roast_id' });
});
