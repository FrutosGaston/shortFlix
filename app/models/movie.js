import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),
  cover_background: DS.attr('string'),
  score: DS.attr('string'),
  imdb: DS.attr('string'),
  year: DS.attr('string'),
  geners: DS.attr('string'),
  duration: DS.attr('string'),
  writer: DS.attr('string'),
  actors: DS.attr('string'),
  trailer: DS.attr('string'),
  director: DS.attr('string')
});
