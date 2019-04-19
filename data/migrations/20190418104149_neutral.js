
exports.up = function(knex, Promise) {
    return knex.schema.createTable("neutral", table => {
		table.string("country");
        table.decimal("trend", null);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("neutral");
};
