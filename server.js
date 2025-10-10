import { fastify } from 'fastify'
import animalRoutes from './routes/animal.routes.js'

const server = fastify()


server.register(animalRoutes, { prefix: '/animal' })

server.listen({ port: 3031 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server running at ${address}`)
})
