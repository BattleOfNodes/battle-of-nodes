const config = require('./config');

module.exports = (app) => {
    app.use('/api', config);
};