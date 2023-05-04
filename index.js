const express=require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')


app.set('port', process.env.PORT || 7000)
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,'/')))

const server = app.listen(app.get('port'),(req,res)=>{
	console.log(`Server on port ${app.get('port')}`)
})
const SocketIO = require('socket.io')
const io = SocketIO(server)

 io.on('connection',(socket)=>{
 	socket.on('chat:message',(data)=>{
 		io.sockets.emit('chat:message', data);
 	});
	 socket.on('message',(dato)=>{
		io.sockets.emit('message', dato);
	});
});