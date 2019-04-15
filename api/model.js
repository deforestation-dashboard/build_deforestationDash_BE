const db = require("../data/database");

const get = () => {
	return db("forest");
};

module.exports = {
	get,
};