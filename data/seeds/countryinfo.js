const countrydata = require('../countrydata');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coutryinfo').truncate()
    .then(function () {
      return knex('countryinfo').insert(countrydata);
    });
};
