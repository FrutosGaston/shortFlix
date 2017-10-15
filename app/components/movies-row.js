import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    this.$('.carousel').slick({
      'slidesToShow': 5,
      'infinite': false,
      'prevArrow': "<div class='a-left control-c prev slick-prev'><img src='../assets/images/back.png'></img></div>",
      'nextArrow': "<div class='a-right control-c next slick-next'><img src='../assets/images/forward.png'></img></div>"
    })
  }
});
