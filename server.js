import config from './config';
import apiRouter from './api';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import helmet from 'helmet';

const server = express();

//If server is running in production all request will be permanently(301) routed to https
if(config.nodeEnv !== 'development'){
    let forceSsl = function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(301, ['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    };
    server.use(forceSsl);
    server.use(helmet());
}

server.use(express.static(path.join(__dirname,'client/build')));
server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.log("Server listening on port " + config.port);
});