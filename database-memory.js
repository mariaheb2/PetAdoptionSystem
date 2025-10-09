import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #animals = new Map()

    create(animal) {
        const animalId = ramdomUUID()
        this.#animals.set(animalId, animal)
    }

    update(id, animal){
        this.#animals.set(id, animal)
    }

    delete(id){
        this.#animals.delete(id)
    }

    list(){
        this.#animals.values()
    }
}