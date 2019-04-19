const data = require('../data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forest').truncate()
    .then(function () {
      return knex('forest').insert(data);
    });
};
