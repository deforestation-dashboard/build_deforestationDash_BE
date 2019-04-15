// import data from '../csvjson.json'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forest').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('forest').insert([
        {
          "entity": "Afghanistan",
          "code": "AFG",
          "year": 1990,
          "percent": 2.07
        },
        {
          "entity": "Afghanistan",
          "code": "AFG",
          "year": 2000,
          "percent": 2.07
        },
        {
          "entity": "Afghanistan",
          "code": "AFG",
          "year": 2005,
          "percent": 2.07
        },
        {
          "entity": "Afghanistan",
          "code": "AFG",
          "year": 2010,
          "percent": 2.07
        },
        {
          "entity": "Afghanistan",
          "code": "AFG",
          "year": 2015,
          "percent": 2.07
        },
        {
          "entity": "Albania",
          "code": "ALB",
          "year": 1990,
          "percent": 28.79
        },
        {
          "entity": "Albania",
          "code": "ALB",
          "year": 2000,
          "percent": 28.08
        },
        {
          "entity": "Albania",
          "code": "ALB",
          "year": 2005,
          "percent": 28.55
        },
        {
          "entity": "Albania",
          "code": "ALB",
          "year": 2010,
          "percent": 28.33
        }
      ]);
    });
};