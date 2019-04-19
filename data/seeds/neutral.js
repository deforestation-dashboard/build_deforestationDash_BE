const data = require('../neutraldata');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('neutral').truncate()
    .then(function () {
      return knex('neutral').insert(data)
    });
};