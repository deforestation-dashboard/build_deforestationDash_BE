const db = require("../data/database");

const get = () => {
	return db("deforestation");
};

const getDownTrend = () => {
	return db("downtrend");
};

const getUpTrend = () => {
	return db("uptrend");
};

const getNeutral = () => {
	return db("neutral");
};

const getByYear = (year) => {
	return db("deforestation").where({year}).select('country', 'forest_propotion_to_land');
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
    getCountryByYear,
    getDownTrend,
    getUpTrend,
    getNeutral
};