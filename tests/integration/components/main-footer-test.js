import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-footer', 'Integration | Component | main footer', {
  integration: true
});

test('it shows the logo', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-footer}}`);

  // Template block usage:
  this.render(hbs`
    {{#main-footer}}
      template block text
    {{/main-footer}}
  `);

  assert.equal(this.$('.logofooter').length, 1);
});
