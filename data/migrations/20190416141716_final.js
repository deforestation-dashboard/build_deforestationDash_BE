
exports.up = function(knex, Promise) {
    return knex.schema.createTable("deforestation", table => {
		table.string("country");
		table.string("code");
        table.integer("year");
        table.decimal("forest_area_km", null);
        table.decimal("country_land_area_km", null);
        table.decimal("forest_propotion_to_land", null);
        table.bigInteger("country_population");
        table.bigInteger("wood_removal");
        table.bigInteger("total_land_usage");
        table.decimal("percent_protected_land", null);
        table.decimal("mean_yearly_exposure_pollution", null);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("deforestation");
};
