import Model, { attr } from '@ember-data/model';

export default class RoastModel extends Model {
  @attr('string') text;
  @attr('string') img_url;
}
