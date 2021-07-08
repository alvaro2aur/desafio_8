const express = require('express')
const bodyParser = require('body-parser')

const almacen = require('./clases/clase1');

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080
const myAlmacen = new almacen()
    

app.post('/productos', async (req,res) =>{
    const nuevoProducto = await myAlmacen.add(req.body)
    return res.send({
        message: 'Producto incorporado',
        payload: nuevoProducto
    })
})

app.get('/productos', async (req,res) =>{
    const all = await myAlmacen.getAll()
    if(all.length == 0){
        return res.send({error:'No hay productos cargados'})
    }
    return res.send(all)
})

app.get('/productos/:id', async (req,res) =>{
    const producto = await myAlmacen.getOne(req.params.id)
    if(!producto){
        return res.send({error:'Producto no encontrado'})
    }
    return res.send(producto)
})

app.put('/productos/:id', async (req,res) =>{
    const producto = await myAlmacen.getOne(req.params.id)
    if(!producto){
        return res.send({error:'Producto no encontrado'})
    }
    const productoUpdated = await myAlmacen.update(req.params.id,req.body)
    return res.send(productoUpdated)
})


const server = app.listen( PORT, () => {
    console.log(`Server running ${PORT}`)
})

server.on('Error', err => console.log(`Error ${err}`))