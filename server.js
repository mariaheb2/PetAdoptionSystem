import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory();

server.get('/', () => {
    return 'Hello puppy'
})

server.post('/animal',()=>{
    database.create({
        name: 'Junior',
        species: 'Dog',
        adopted: 'not yet'
    })


})

server.put('/animal/:id',()=>{

})

server.listen({port:3031})