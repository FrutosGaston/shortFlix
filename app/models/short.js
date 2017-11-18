import DS from 'ember-data';

export default DS.Model.extend({
  actors: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),
  directors: DS.attr('string'),
  duration: DS.attr('string'),
  genres: DS.attr('string'),
  imdb: DS.attr('string'),
  score: DS.attr('string'),
  title: DS.attr('string'),
  video: DS.attr('string'),
  writers: DS.attr('string'),
  year: DS.attr('string')
});
