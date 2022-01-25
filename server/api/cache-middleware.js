const NodeCache = require( "node-cache" );

const internalCache = new NodeCache( { stdTTL: 10} );

let cache = (durationInSeconds) => {
    return (req, res, next) => {

        let key =  '__nodecache__' + req.originalUrl || req.url;
        let cached = internalCache.get(key);
        if(cached) {
            res.send(cached);
            return
        }
        res.sendResponse = res.send;
        res.send = (body) => {
            internalCache.set(key, body, durationInSeconds);
            res.sendResponse(body)
        }

        next()
    }
}

module.exports = cache;