const {Pool} = require('pg')

const pool = new Pool({
    connectionString: "postgres://slenclgx:2BB2XVQH1F_rMXKjttdFMiy3IIKLOV7N@tyke.db.elephantsql.com/slenclgx"
})

module.exports = {
    query (text, params) {
        return new Promise((resolve, reject) => {
            pool.query(text, params)
            .then(res => resolve(res))
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}