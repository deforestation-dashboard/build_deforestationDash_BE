
exports.up = function(knex, Promise) {
    return knex.schema.createTable("countryinfo", table => {
		table.string("country");
		table.string("code");
        table.bigInteger("year");
        table.decimal("forest_area_km");
        table.decimal("country_land_area_km");
        table.decimal("forest_propotion_to_land");
        table.integer("country_population");
        table.integer("wood_removal");
        table.integer("total_land_usage");
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("countryinfo");
};
