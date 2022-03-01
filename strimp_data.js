const WebSocket = require('ws');

class StrimpData {
    constructor(express) {
        this.sockets = []
        this.data = ""

        this.ws_server = new WebSocket.Server({
            noServer: true
        })

        this.ws_server.on('connection', (s) => {
            console.log(`Client is connecting`)
            this.sockets.push(s)

            s.on('message', (msg) => {
                this.sockets.forEach(si => {
                    if (si !== s)
                        si.send(msg)
                })
            })

            s.on('close', () => {
                console.log('Client disconnected')
                this.sockets = this.sockets.filter(si => si !== s)
            })
        })

        express.on('upgrade', (request, socket, head) => {
            wsServer.handleUpgrade(request, socket, head, socket => {
                wsServer.emit('connection', socket, request);
            });
        });
    }
}
module.exports = StrimpData;