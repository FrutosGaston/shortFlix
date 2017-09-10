import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showBigCard() {
      this.set('bigCardShown', true);
    },
    hideBigCard(){
      this.set('bigCardShown', false);
    }
  }
});
