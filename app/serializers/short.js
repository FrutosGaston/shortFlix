import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    payload = payload
    return {
      data: [{
        id: payload.title,
        type: type.modelName,
        attributes: {
          id: payload.id,
          actors: payload.actors,
          cover: payload.cover,
          description: payload.description,
          directors: payload.directors,
          duration: payload.duration,
          genres: payload.genres,
          imdb: payload.imdb,
          score: payload.score,
          title: payload.title,
          video: payload.video,
          writers: payload.writers,
          year: payload.year
        }]
      }
    };
  }
});