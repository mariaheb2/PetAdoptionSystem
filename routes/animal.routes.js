import {
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal
} from '../controllers/animal.controller.js'

export default async function animalRoutes(server) {
  server.get('/', getAnimals)
  server.post('/', createAnimal)
  server.put('/:id', updateAnimal)
  server.delete('/:id', deleteAnimal)
}
