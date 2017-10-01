import Ember from 'ember';

function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("youvideo");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = (state == 'hide' ? 'none' : '');
    var func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

export default Ember.Component.extend({
  actions: {
    playTrailer() {
      toggleVideo('show');
      this.$(".moviecard").addClass("movie-view-trailer");
    },
    backToInfo(){
      this.$(".moviecard").removeClass("movie-view-trailer");
      toggleVideo('hide');
    }
  }
});