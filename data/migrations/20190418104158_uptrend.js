
exports.up = function(knex, Promise) {
    return knex.schema.createTable("uptrend", table => {
		table.string("country");
        table.decimal("trend", null);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("uptrend");
};
