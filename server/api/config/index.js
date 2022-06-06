const express = require('express');
const config = require('../../config');
const cache = require("../cache-middleware");
const db = require('../../db/index')

const router = express.Router();

router.post('/v1/sendToken/:address/:token', sendToken)
router.get('/v1/getToken/:address', getToken)

router.get('/v1/config', (req,res) => {
    res.status(200).json(config);
})


async function sendToken (req, res) {
    if(req.params.address.length != 62 && req.params.token.length != 11)
        return res.status(400).send({'message': 'Address format or token format incorect'})

    const queryCheck = 'SELECT * from loginchart where address like $1'
    const queryInsertIdToken = 'INSERT INTO loginchart(address, token, date, id) VALUES($1,$2,NOW(),SELECT MAX(id)+1 from loginchart) returning *'
    const queryInsertToken = 'UPDATE loginchart SET token=$2,date=NOW() WHERE address=$1 returning *'

    try {
        const { rows } = await db.query(queryCheck, [req.params.address])
        if(rows.length === 0) {
            const { rows } = await db.query(queryInsertIdToken, [req.params.address, req.params.token])
            return res.status(200).send(rows[0])
        } else {
            const { rows } = await db.query(queryInsertToken, [req.params.address, req.params.token])
            return res.status(200).send(rows[0])
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
}
async function getToken (req, res) {
    if(req.params.address.length != 62)
        return res.status(400).send({'message': 'Address format incorect'})

    const query = 'SELECT * from loginchart where address like $1'
    try {
        const { rows } = await db.query(query, [req.params.address])
        if(rows.length !== 0)
            return res.status(200).send(rows[0])
        return res.status(400).send({'message': 'Address not found'})
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
}


module.exports = router;

