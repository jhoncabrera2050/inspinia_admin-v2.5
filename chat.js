const socket = io();

let message = document.getElementById('message'); 
//let username = document.getElementById('username'); 
let btn = document.getElementById('send'); 
let output = document.getElementById('output'); 

let output2 = document.getElementById('output2'); 
let actions2 = document.getElementById('actions2');
let btn2 = document.getElementById('send2'); 
let message2 = document.getElementById('message2'); 

btn.addEventListener('click' , function (){
    socket.emit('chat:message',{
        message  : message.value 
    })
})

btn2.addEventListener('click' , function (){
    socket.emit('message',{
        message2  : message2.value 
    })
})

socket.on('chat:message',function(data){
    output2.innerHTML += `<div class="message message-received">
         <div >
             <strong>  </> ${data.message}
         </div>
     </div>`;
});
socket.on('message',function(dato){
    output.innerHTML += `<div class="message message-sent">
         <div >
             <strong>  </> ${dato.message2}
         </div>
     </div>`;
});


socket.on('chat:message',function(data){
    output.innerHTML += `<div class="message message-received">
         <div>
             <strong>  </strong> ${data.message}
         </div>
     </div>`;
});
socket.on('message',function(dato){
    output2.innerHTML += `<div class="message message-sent">
         <div>
             <strong>  </strong> ${dato.message2}
         </div>
     </div>`;
});




