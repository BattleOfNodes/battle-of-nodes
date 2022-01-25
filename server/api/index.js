const config = require('./config');

module.exports = (app) => {
    app.use('/api/v1/config', config);
};