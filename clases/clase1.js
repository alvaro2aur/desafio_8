// import fs from 'fs'
const fs = require('fs')


class Almacen{
    constructor(){
        this.storage = []
        this.id = 0
    }
    async getAll(){
        return this.storage
    }
    async getOne(id){
        const producto = this.storage.find(x => x.id == id)
        return producto
    }
    async add(producto){
        this.id += 1
        producto.id = this.id
        this.storage.push(producto)
        return producto

    }
    async update(id,newProducto){
        const oldProducto = this.getOne(id)
        co
        return producto

    }

}

module.exports = Almacen