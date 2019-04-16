
exports.up = function(knex, Promise) {
    return knex.schema.createTable("countryinfo", table => {
		table.string("country");
		table.string("code");
        table.integer("year");
        table.decimal("forest_area_km", [NULL]);
        table.decimal("country_land_area_km", [NULL]);
        table.decimal("forest_propotion_to_land", [NULL]);
        table.bigInteger("country_population");
        table.bigInteger("wood_removal");
        table.bigInteger("total_land_usage");
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("countryinfo");
};
