import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return { shorts: this.get('store').findAll('short') };
  }
});
