import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #animals = new Map()

    create( animalName, species, adopted ) {
        const animalId = randomUUID()
        this.#animals.set(animalId,  animalName, species, adopted)
    }

    update(id, animal){
        this.#animals.set(id, animal)
    }

    delete(id){
        this.#animals.delete(id)
    }

    list(){
        return Array.from(this.#animals.entries()).map((animalArray) => {
            const id = animalArray[0]
            const data = animalArray[1]

            return{
                id,
                ...data,
            }
        })
    }
}