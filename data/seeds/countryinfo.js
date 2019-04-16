const countrydata = require('../countrydata');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countryinfo').truncate()
    .then(function () {
      return knex('countryinfo').insert(countrydata);
    });
};
