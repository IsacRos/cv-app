import { module, test } from 'qunit';
import { setupTest } from 'cv-app/tests/helpers';

module('Unit | Route | roast-details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:roast-details');
    assert.ok(route);
  });
});
