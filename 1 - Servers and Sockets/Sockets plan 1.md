1. create new dir
2. install node.js from website
3. run "npm init -y"
4. run "npm i express@4.16.4"
5. https://dev.to/cglikpo/getting-started-with-socket-io-7m4
```
<!DOCTYPE html>
<html>
<head>
<title>Socket.IO chat</title>
</head>
<body>
<h1>Socket.io Chat App</h1>

</body>
</html>
```
```
const path=require('path');
const express=require('express');

const app=express();


const port=process.env.PORT || 3000;
const publicDirectoryPath=path.join(__dirname,'/public');

app.use(express.static(publicDirectoryPath));

app.listen(port,()=>{
  console.log(`Server is listening on port ${port}`);
});
```
6. create Public folder
7. node index.js
8. npm install socket.io@2.2.0
9.  add to top ``` const http = require('http');
const socketio = require('socket.io');
10. add below const app ```const server=http.createServer(app);
const io=socketio(server);
11. replace app.listen with `````
io.on("connection",(client)=>{
    console.log('New websocket connection');

})

server.listen(port,()=>{
    console.log(`Server is up on port ${port}!`);
})
11. run code and watch terminal for new socket
12. add disconnect event catcher ```io.on('connection', (client) => {

    console.log('New websocket connection');

    client.on('disconnect', () => {

      console.log('New websocket disconnected');

    });

  });
13. talk about socket.on and socket.emit add message code ``````
 client.on('messageFromClient', msg => {
    io.emit('messageFromServer', msg);
  });
14. add updated client side code
15. have fun