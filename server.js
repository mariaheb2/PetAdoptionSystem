import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory();

server.get('/animal', (request, reply) => {
    const animals = database.list()
    return animals
})

server.post('/animal',(request, reply)=>{
    const {animalName, species, adopted} = request.body
    database.create({
        animalName,
        species,
        adopted
    })

    return reply.status(201).send()    

})

server.put('/animal/:id',()=>{

})

server.listen({port:3031})