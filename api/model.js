const db = require("../data/database");

const get = () => {
	return db("forest");
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
	return db("forest");
};

module.exports = {
    get,
    getByYear,
    getCountry,
    getCountryByYear,
    test
};