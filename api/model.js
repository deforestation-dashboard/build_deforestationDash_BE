const db = require("../data/database");

const get = () => {
	return db("deforestation");
};

const getByYear = (year) => {
	return db("deforestation").where({year}).select('entity', 'percent');
};

const getCountry = (country) => {
	return db("deforestation").where({country});
};

const getCountryByYear = (country,year) => {
	return db("deforestation").where({country, year}).first();
};

module.exports = {
    get,
    getByYear,
    getCountry,
    getCountryByYear
};