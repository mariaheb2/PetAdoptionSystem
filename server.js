import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello puppy'
})
server.listen({port:3031})
