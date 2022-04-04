window.onload= () =>{
    const socket = io()

    socket.on('messages', data=>{
        loadMessages(data)
    })

    socket.on('products', productsList =>{
        loadProducts(productsList)
    })

    async function loadProducts(productsList) {
        let htmlProd = {}
        const tableList= await fetch ('views/partials/table.ejs').then(res=>res.text())
        if (productsList.length === 0){
            htmlProd = `No se encontraron productos`
        }else{
            htmlProd = ejs.render(tableList, {productsList})
        }
        document.getElementById('newTable').innerHTML = htmlProd; 
    }

    document.getElementById('btn').addEventListener('click', ()=>{
        const newProduct = {
            title: document.getElementById('title').value,
            price: document.getElementById('price').value,
            url: document.getElementById('url').value
        }
        socket.emit('GuardarNuevoProducto', newProduct)
    })

    function loadMessages(data){
        const html = data.map((elem, index) => {
            return(`<div class="direct-chat-info clearfix">
                         <span id="chatName" class="direct-chat-name pull-right">${elem.email}</span>
                        <span id= "chatDate" class="direct-chat-timestamp pull-left">${elem.date}</span>
                    </div>
                         <div id="chatText" class="direct-chat-text">${elem.text}</div>
                     `)
        }).join(" ");
        document.getElementById('messages').innerHTML = html; 
    }

    document.getElementById('frm').addEventListener('submit', (e)=>{
        e.preventDefault()
        addMessage()
    })

    function addMessage(){
        const newMessage = {
            email: document.getElementById('email').value,
            text: document.getElementById('text').value
        }
        socket.emit('NuevoMensaje', newMessage)
    }
}