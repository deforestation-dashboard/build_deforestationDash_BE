import data from '../csvjson.json'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forest').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('forest').insert(data);
    });
};
