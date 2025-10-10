import { database } from '../database/database-memory.js'

// GET /animal
export function getAnimals(request, reply) {
  const animals = database.list()
  return reply.send(animals)
}

// POST /animal
export function createAnimal(request, reply) {
  const { animalName, species, adopted } = request.body

  // Validação básica
  if (!animalName || !species || !adopted) {
    return reply.status(400).send({
      error: 'animalName, species e adopted são obrigatórios'
    })
  }

  database.create({ animalName, species, adopted })
  return reply.status(201).send()
}

// PUT /animal/:id
export function updateAnimal(request, reply) {
  const { id } = request.params
  const { animalName, species, adopted } = request.body

  if (!animalName || !species || !adopted) {
    return reply.status(400).send({
      error: 'animalName, species e adopted são obrigatórios'
    })
  }

  database.update(id, { animalName, species, adopted })
  return reply.status(204).send()
}

// DELETE /animal/:id
export function deleteAnimal(request, reply) {
  const { id } = request.params
  database.delete(id)
  return reply.status(204).send()
}
