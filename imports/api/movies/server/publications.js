// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Movies } from '../movies.js';

Meteor.publish('movies.all', function () {
  return Movies.find();
});
