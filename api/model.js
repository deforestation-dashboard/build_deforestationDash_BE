const db = require("../data/database");

const get = () => {
	return db("forest");
};

const getByYear = (year) => {
	return db("forest").where({year});
};

module.exports = {
    get,
    getByYear
};