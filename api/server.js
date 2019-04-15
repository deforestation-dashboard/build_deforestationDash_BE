require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const Forest = require('./model')

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

server.get("/api", (req, res) => {
	res.status(200).json({ message: "API Live" });
});

server.get("/forest", (req, res) => {

	try {
		const list = await Forest.get();
		res.status(200).json(list);
	} catch (error) {
		return res.status(500).json({ message: "Error retrieving information" });
	}
});

module.exports = server;

