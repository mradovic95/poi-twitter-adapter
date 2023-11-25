"use strict";

const express = require('express');
const router = express.Router();

const Web3 = require("web3");
const web3 = new Web3("https://sepolia.infura.io/v3/d7b60fd99b624406ac0943d8f301c4d9");
const jsonInterface = require("../POI.json").abi;
let contract = new web3.eth.Contract(jsonInterface, "0x9C648d8B460E89F29ad71ee3C9204d6c502c7Cd1");
let privateKey = "b547298ba25e6394beec9ded0f8e431c0fab50948dea80844ece8bf468a74650";

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.defaultAccount = account.address;
web3.eth.accounts.wallet.add(account);

router.get('/api/v1/influencer-contract/approve', async (req, res, next) => {


	contract.methods.acceptInfluencerContract(req.query["id"], `?reach=${req.query["reach"]}&likes=${req.query["likes"]}`).send({
		from: account.address,
		gas: 1000000
	}).then(data => {
		console.log(data);
	})

	res.status(200).send({
		status: "OK"
	});

});

router.get('/api/v1/influencer-contract/finish', async (req, res, next) => {


	contract.methods.request(req.query["id"]).send({
		from: account.address,
		gas: 1000000
	}).then(data => {
		console.log(data);

	}).catch(e => console.log(e))

	res.status(200).send({
		status: "OK"
	})
});

module.exports = router;
