import Ember from 'ember';


export default Ember.Route.extend({
	model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'movie',
        attributes: {
          title: 'Pennywise',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51n0RsXCQqL.jpg',
          description: ''
        },
        relationships: {}
      },
      {
        id: 2,
        type: 'movie',
        attributes: {
          title: 'Her',
          cover: 'https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg',
          description: ''
        },
        relationships: {}
      },
        {
        id: 3,
        type: 'movie',
        attributes: {
          title: 'Moonlight',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51RJnNQjQ8L._SY445_.jpg',
          description: ''
        },
        relationships: {}
      },
        {
        id: 4,
        type: 'movie',
        attributes: {
          title: 'Spongebob SquarePants',
          cover: 'https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg',
          description: ''
        },
        relationships: {}
      }
      ]
    });
    return this.get('store').findAll('movie');
  }
});