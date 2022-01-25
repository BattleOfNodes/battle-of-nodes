const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compress = require('compression');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const api = require(path.join(__dirname, '/api'));

const app = express();

const staticDir = path.join(__dirname, '../dist');
console.info('serve static on path ' + staticDir);

app.disable('x-powered-by');
app.use(cors());
app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        "img-src": ["* data:"],
        "connect-src": [
            "'self'",
            "wss://*.bridge.walletconnect.org",
            "api.elrond.com",
            "gateway.elrond.com",
            "testnet-api.elrond.com",
            "testnet-gateway.elrond.com",
            "devnet-api.elrond.com",
            "devnet-gateway.elrond.com",
        ],
        "frame-src": [
            "player.vimeo.com"
        ]
}}));
app.use(compress());

api(app);

app.use(history());
app.use(serveStatic(staticDir, { maxAge: '1d'}));

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.info('listen on port ' + port);
}
);