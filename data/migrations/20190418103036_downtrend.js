
exports.up = function(knex, Promise) {
    return knex.schema.createTable("downtrend", table => {
		table.string("country");
        table.decimal("trend", null);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("downtrend");
};
