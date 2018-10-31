import { Template } from 'meteor/templating'

import './movies_board.html';

import '../date_filter/date_filter.js';
import '../movie/movie.js';

Template.body.helpers({
    movies: function(){
        return Movies.find({});
    }
});