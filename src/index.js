"use strict";

const express = require("express");

const app = express();

const twitterController = require("./controller/TwitterController");
const influencerContractController = require("./controller/InfluencerContractController");
app.use(twitterController);
app.use(influencerContractController);

app.listen(8080, () => {
	console.log("Application is running on port: 8080")
});

module.exports = app;
