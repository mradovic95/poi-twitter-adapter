"use strict";

const express = require('express');
const router = express.Router();

router.get('/api/v1/tweet', async (req, res, next) => {

	try {
		console.log("requestedReach:" + req.query["reach"] + "," + "requestedLikes:" + req.query["likes"])
		res.status(200).send({
			data: {
				tweetReachAndLikes: req.query["reach"] + "," + req.query["likes"],
			}
		});
	} catch (error) {

		res.status(500).send("Internal Server Error");
	}
});

router.get('/api/v1/tweet/content', async (req, res, next) => {

	try {
		res.status(200).send({
			data: {
				content: "First Stripe POS terminal I've seen in the wild. Very cool (and makes a lot of sense!)"
			}
		});
	} catch (error) {

		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
