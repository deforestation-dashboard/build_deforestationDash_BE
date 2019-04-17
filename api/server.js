require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require('axios');
const Forest = require('./model')


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

server.get("/api", (req, res) => {
	let myObj={};
	const url = 'https://deforestation-dashboard.herokuapp.com/Vietnam/1990'
	axios.get(url).then(data =>{
		try {
			myObj = data.data;
			res.status(200).json(myObj)
		} catch (error) {
			return res.status(500).json({ message: "Error retrieving information" });
		}
	}).catch(err=>{
		return res.status(500).json({ message: "Error retrieving information" });
	});
});

server.get("/forest", async (req, res) => {
	try {
		const list = await Forest.get();
		res.status(200).json(list);
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

server.get("/forest/:year", async (req, res) => {

	try {
		const list = await Forest.getByYear(req.params.year);
		res.status(200).json(list);
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

server.get("/forest/:year/array", async (req, res) => {

	try {
		const list = await Forest.getByYear(req.params.year);
		let countryArray = [];
		let percentArray = [];
		list.map( e => {
			countryArray.push(e.country);
			percentArray.push(e.forest_propotion_to_land);
		})
		res.status(200).json({country: countryArray, forest_propotion_to_land: percentArray});
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

server.get("/:country", async (req, res) => {

	try {
		const list = await Forest.getCountry(req.params.country);
		res.status(200).json(list);
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

server.get("/:country/:year", async (req, res) => {

	try {
		const country = await Forest.getCountryByYear(req.params.country,req.params.year);
		res.status(200).json(country);
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

module.exports = server;

