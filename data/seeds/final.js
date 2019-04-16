const finaldata1 = require('../finaldata1');
const finaldata2 = require('../finaldata2');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('deforestation').truncate()
    .then(function () {
      return knex('deforestation').insert(finaldata1)
        .then(function () {
          return knex('deforestation').insert(finaldata2)
        });
    });
};
