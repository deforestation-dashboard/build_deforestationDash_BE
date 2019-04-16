
exports.up = function(knex, Promise) {
    return knex.schema.createTable("forest", table => {
		table.string("entity");
		table.string("code");
        table.integer("year");
        table.decimal("percent");
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("forest");
};