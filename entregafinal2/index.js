//const mongoose= require ('mongoose')
const app= require ('./app/app')
const PORT=process.env.PORT
//const urlBase=process.env.DB

//mongoose.connect(urlBase)

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))