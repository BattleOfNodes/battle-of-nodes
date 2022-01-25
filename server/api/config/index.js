const express = require('express');
const config = require('../../config');
const cache = require("../cache-middleware");

const router = express.Router();

router.get('/', cache(86400), (req,res) => {
    res.status(200).json(config);
})

module.exports = router;