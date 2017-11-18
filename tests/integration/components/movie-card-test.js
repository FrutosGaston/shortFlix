import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movie-card', 'Integration | Component | movie card', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#movie-card}}
      template block text
    {{/movie-card}}
  `);

  assert.equal(this.$().text().trim(), 'View more');
});

test('it renders a movie when its present', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  var movie = { title: 'Titanic', cover: '', description: 'Jack dies' }
  this.set('movieToShow', movie);
  
  // Template block usage:
  this.render(hbs`
    {{#movie-card movie=movieToShow}}
    {{/movie-card}}
  `);

  assert.equal(this.$('h3').text().trim(), 'Titanic');
});
