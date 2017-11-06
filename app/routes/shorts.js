import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return Ember.RSVP.hash({
      shorts: Ember.$.getJSON('/api/shorts')
    })
  }
});
