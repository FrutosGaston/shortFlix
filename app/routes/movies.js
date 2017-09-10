import Ember from 'ember';


export default Ember.Route.extend({
	model() {
    var store = this.get('store');
    store.push({
      data: [{
        id: 1,
        type: 'movie',
        attributes: {
          title: 'Pennywise',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51n0RsXCQqL.jpg',
          cover_background: Ember.String.htmlSafe('background: url(https://images-na.ssl-images-amazon.com/images/I/51n0RsXCQqL.jpg)'),
          description: 'In 1960, seven pre-teen outcasts fight an evil demon who poses as a child-killing clown. Thirty years later, they reunite to stop the demon once and for all when it returns to their hometown.',
          score: '6,9',
          imdb: 'http://www.imdb.com/title/tt0099864/',
          year: '1990',
          geners: 'Drama, Fantasy, Horror',
          duration: '3h 12min',
          writer: 'Stephen King',
          actors: 'Richard Thomas, Tim Reid, Annette O`Toole',
          trailer: 'https://www.youtube.com/embed/SVJER7ySXms',
          director: 'Andy Muschietti'
        },
        relationships: {}
      },
      {
        id: 2,
        type: 'movie',
        attributes: {
          title: 'Her',
          cover: 'http://www.impawards.com/2013/posters/her.jpg',
          cover_background: Ember.String.htmlSafe('background: url(https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg)'),
          description: 'A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.',
          score: '8,0',
          imdb: 'http://www.imdb.com/title/tt1798709/',
          year: '2013',
          geners: 'Drama, Romance, Science-Fiction',
          duration: '2h 6min',
          writer: 'Spike Jonze',
          actors: 'Joaquin Phoenix, Amy Adams, Scarlett Johansson',
          trailer: 'https://www.youtube.com/embed/WzV6mXIOVl4',
          director: 'Spike Jonze'
        },
        relationships: {}
      },
        {
        id: 3,
        type: 'movie',
        attributes: {
          title: 'Moonlight',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51RJnNQjQ8L._SY445_.jpg',
          cover_background: Ember.String.htmlSafe('background: url(https://images-na.ssl-images-amazon.com/images/I/51RJnNQjQ8L._SY445_.jpg)'),
          description: 'A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.',
          score: '7,5',
          imdb: 'http://www.imdb.com/title/tt4975722/?ref_=nv_sr_1',
          year: '2016',
          geners: 'Drama',
          duration: '1h 51min',
          writer: 'Barry Jenkins',
          actors: 'Mahershala Ali, Shariff Earp, Duan Sanderson',
          trailer: 'https://www.youtube.com/embed/2gZ-Tmxa61g',
          director: 'Barry Jenkins'
        },
        relationships: {}
      },
        {
        id: 4,
        type: 'movie',
        attributes: {
          title: 'Spongebob SquarePants',
          cover: 'https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg',
          cover_background: Ember.String.htmlSafe('background: url(https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg)'),
          description: 'SpongeBob SquarePants takes leave from the town of Bikini Bottom in order to track down King Neptune`s stolen crown.',
          score: '7,0',
          imdb: 'http://www.imdb.com/title/tt0345950',
          year: '2004',
          geners: 'Animation, Adventure, Comedy',
          duration: '1h 27min',
          writer: 'Stephen Hillenburg',
          actors: 'Jeffrey Tambor, Rodger Bumpass, Carolyn Lawrence',
          trailer: 'https://www.youtube.com/embed/Vv6MZ8piuUY',
          director: 'Stephen Hillenburg, Mark Osborne'
        },
        relationships: {}
      }
      ]
    });
    return {
      allMovies: store.findAll('movie'),
      stephenMovies: store.findAll('movie')
    }
  }
});