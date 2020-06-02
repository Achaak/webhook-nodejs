const secret = "your_secret_here";
const repo = "~/your_repo_path_here/";
const pm2Id = 1;
const port = 8080;

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        if (req.headers['x-hub-signature'] == sig) {
            exec(`cd ' ${ repo } && pm2 stop ${ pm2Id } && git pull && npm i && pm2 start ${ pm2Id }`);
        }
    });

    res.end();
}).listen(port);