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
                const msgString = msg.toString()
                if (this.data === msgString)
                    return
                this.data = msgString
                console.log("data updated")

                this._propagate(s)
            })

            s.on('close', () => {
                console.log('Client disconnected')
                this.sockets = this.sockets.filter(si => si !== s)
            })
        })

        console.log(`Started strimp data transport on port ${port}`)
    }
    // Sending data to every open socket except the source of the update
    _propagate(sourceSocket) {
        this.sockets.forEach(socket => {
            if (socket !== sourceSocket)
                socket.send(this.data)
        })
    }
}
module.exports = StrimpData;