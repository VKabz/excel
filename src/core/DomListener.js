import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provider for DOM Listener!')
        }
        this.$root = $root
        this.listeners = listeners

    }

    initDOMListener() {
        this.listeners.forEach(listener => {
            const method = addOnForMethod(listener)

            if (!this[method]) {
                throw new Error(`Ошибка, вы не создали метод ${method} в классе ${this.name || ''}`)
            }

            this[method] = this[method].bind(this)

            this.$root.on(listener, this[method])
        })
    }

    removeDOMListener() {
        this.listeners.forEach(listener => {
            const method = addOnForMethod(listener)

            this.$root.on(listener, this[method])
        })
    }
}

const addOnForMethod = (listener) => {
    return `on${capitalize(listener)}` 
}