const http = require('http');
const os = require('os');
const moment = require('moment');

function getBasicStats() {
    const data = {
        os: {
            uptime: moment.duration(os.uptime(), 'seconds').humanize()
        },
        cpu: {
            cores: os.cpus().length,
            loadavg: os.loadavg()
        },
        memory: {
            total: os.totalmem(),
            free: os.freemem()
        },
        process: {
            uptime: moment.duration(process.uptime(), 'seconds').humanize()
        }
    };
    return JSON.stringify(data);
}

function startLivenessProb() {
    const port = 4500;
    const requestHandler = (request, response) => {
        response.end(getBasicStats());
    };
    const server = http.createServer(requestHandler);

    server.listen(port, (err) => {
        if (err) {
            return console.log('Liveness Probe Failed', err);
        }
        console.log(`Liveness Probe is listening on ${port}`);
    });
}

startLivenessProb();