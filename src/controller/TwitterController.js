"use strict";

const express = require('express');
const router = express.Router();

router.get('/api/v1/tweet', async (req, res, next) => {

	try {

		res.status(200).send({
			data: {
				tweetReachAndLikes: req.query["reach"] + "," + req.query["likes"],
			}
		});
	} catch (error) {

		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
