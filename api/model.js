const db = require("../data/database");

const get = () => {
	return db("forest");
};

const getByYear = (year) => {
	return db("forest").where({year}).select('entity', 'percent');
};

module.exports = {
    get,
    getByYear
};