const db = require("../data/database");

const get = () => {
	return db("deforestation");
};

const getByYear = (year) => {
	return db("forest").where({year}).select('entity', 'percent');
};

const getCountry = (country) => {
	return db("countryinfo").where({country});
};

const getCountryByYear = (country,year) => {
	return db("countryinfo").where({country, year}).first();
};

const test = () => {
	return db("deforestation");
};

module.exports = {
    get,
    getByYear,
    getCountry,
    getCountryByYear,
    test
};