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

server.put('/animal/:id',(request, reply)=>{
    const animalId = request.params.id
    const {animalName, species, adopted} = request.body
    database.update(animalId, {
        animalName,
        species,
        adopted
    })

    return reply.status(204).send

})

server.listen({port:3031})