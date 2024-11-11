import { setupTest } from 'cv-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | roast details', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('roast-details', {});
    assert.ok(model, 'model exists');
  });
});