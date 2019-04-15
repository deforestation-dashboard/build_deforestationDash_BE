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
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2000,
          "percent": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2005,
          "percent": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2010,
          "percent": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2015,
          "percent": 2.07
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 1990,
          "percent": 28.79
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2000,
          "percent": 28.08
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2005,
          "percent": 28.55
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2010,
          "percent": 28.33
        }
      ]);
    });
};
