import { randomUUID } from 'node:crypto'

class DatabaseMemory {
  #animals = new Map()

  create({ animalName, species, adopted }) {
    const id = randomUUID()
    this.#animals.set(id, { animalName, species, adopted })
    return id
  }

  update(id, data) {
    this.#animals.set(id, data)
  }

  delete(id) {
    this.#animals.delete(id)
  }

  list() {
    return [...this.#animals.entries()].map(([id, data]) => {
      return { id, ...data }
    })
  }
}
export const database = new DatabaseMemory()
