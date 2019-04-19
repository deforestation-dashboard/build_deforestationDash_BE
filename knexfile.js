
module.exports = {

	testing: {
		client: "pg",
		connection: {
			host: "localhost",
			database: "DeforestationDash",
			user: "david",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		}
	},

	development: {
		client: 'sqlite3',
    	connection: {
      		filename: './data/mydata.db3',
    	},
    	useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		}
	},

	production: {
		client: "postgresql",
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		}
	}
};
