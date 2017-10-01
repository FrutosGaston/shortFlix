import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showBigCard() {
      this.set('bigCardShown', true);
    },
    hideBigCard(){
      var focussedElement = document.activeElement;
      var isFocussed = this.$().has(focussedElement).length > 0
      isFocussed ? null : this.set('bigCardShown', false);
    }
  }
});
