const {Pool} = require('pg')

const pool = new Pool({
    connectionString: "postgress://nzzfqyhffhzwio:a9cc5c68e5e21f1bedb92265e72a3025c175a595852e12be3e55fb0236dd649f@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/d871cki1eegq45"
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