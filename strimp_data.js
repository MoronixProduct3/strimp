const WebSocket = require('ws');

class StrimpData {
    constructor(port) {
        this.sockets = []
        this.data = null

        this.ws_server = new WebSocket.Server({
            port:port
        })

        this.ws_server.on('connection', (s) => {
            console.log(`Client is connecting`)            
            this.sockets.push(s)

            // Pushing data to the new client if there is data
            if(this.data) {
                s.send(this.data)
            }
            
            s.on('message', (msg) => {
                if (this.data === msg.toString())
                    return
                this.data = msg.toString()
                console.log("data updated")
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

        console.log(`Started strimp data transport on port ${port}`)
    }
}
module.exports = StrimpData;