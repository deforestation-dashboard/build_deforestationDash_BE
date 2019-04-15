// import data from '../csvjson.json'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('forest').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('forest').insert([
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 1990,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2000,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2005,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2010,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 2.07
        },
        {
          "Entity": "Afghanistan",
          "Code": "AFG",
          "Year": 2015,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 2.07
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 1990,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 28.79
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2000,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 28.08
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2005,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 28.55
        },
        {
          "Entity": "Albania",
          "Code": "ALB",
          "Year": 2010,
          "15.1.1 - Forest area as a proportion of total land area - AG_LND_FRST - Percent (%)": 28.33
        }
      ]);
    });
};
