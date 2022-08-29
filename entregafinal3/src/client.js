const socket = io();

socket.on("messages", data =>{
    loadMessages(data)
})

function loadMessages(data) {
    const html = data.map((elem, index) => {
        return(`<div class="direct-chat-info clearfix">
                        <span id="chatName" class="direct-chat-name pull-right">${elem.email}</span>
                    <span id= "chatDate" class="direct-chat-timestamp pull-left">${elem.date}</span>
                </div>
                        <div id="chatText" class="direct-chat-text">${elem.msg}</div>
                    `)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

document.getElementById('formData').addEventListener('submit', (e)=> {
    e.preventDefault()
    agregarMensaje()
})

function agregarMensaje() {
    const newMessage = {
        email: document.getElementById('chatMail').value,
        text: document.getElementById('chatText').value,
    }
    socket.emit("newMessage",newMessage)
}