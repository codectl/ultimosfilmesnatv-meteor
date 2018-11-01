import { Template } from 'meteor/templating'
import { Meteor } from "meteor/meteor";
import { Movies } from "/imports/api/movies/movies";

import './movies_board.html';

import '../date_filter/date_filter.js';
import '../movie/movie.js';

Template.movies_board.onCreated(function () {
    Meteor.subscribe('movies.all');
});

Template.movies_board.helpers({
    getMovies() {
        console.log(Movies.find({}));
        return Movies.find({});
    }
});