"use strict";

const express = require('express');
const router = express.Router();

router.get('/api/v1/tweet/:id/tweet-reach', async (req, res, next) => {

	try {

		res.status(200).send({
			data: {
				tweetReach: (1 + Math.floor(Math.random() * 1000000000)).toString()
			}
		});
	} catch (error) {

		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
