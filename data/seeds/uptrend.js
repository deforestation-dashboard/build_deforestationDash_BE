const data = require('../uptrenddata');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('uptrend').truncate()
    .then(function () {
      return knex('uptrend').insert(data)
    });
};