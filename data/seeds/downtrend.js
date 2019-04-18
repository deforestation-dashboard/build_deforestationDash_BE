const data = require('../downtrenddata');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('downtrend').truncate()
    .then(function () {
      return knex('downtrend').insert(data)
    });
};
