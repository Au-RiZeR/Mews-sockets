const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const maths = require('./modules/math.js')

const app = express();
const server=http.createServer(app);
const io=socketio(server);

const port = process.env.PORT || 3000;      // the port to listen to
const publicDirectoryPath = path.join(__dirname, '/public');    //default path for pages to be served

app.use(express.static(publicDirectoryPath));   // how express 'serves' webpages

io.on('connection', (client) => {           // this function runs and persists for each socket individually
    console.log('New websocket connection');// Log someone has connected
    console.log(client.id)
    client.on('messageFromClient', msg => { // on message received
        io.emit('messageFromServer', msg);  // emit message to ALL Sockets
      });

    client.on('disconnect', () => {         // On Socket Destroyed
      console.log('New websocket disconnected');    // Log someone has disconnected
    });
});


console.log(maths.subtract(2,4))


server.listen(port,()=>{                    // Launch server
    console.log(`Server is up on port ${port}!`);
})