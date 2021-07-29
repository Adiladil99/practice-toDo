import {ToDoComponent} from '@core/ToDoComponent'
import {createTitle} from './title.template'

export class Title extends ToDoComponent {
    static className = 'todo__mainTitle'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'Title',
            listeners: [],
            ...options
        })
    }

    get template() {
        return createTitle(this.state)
    }

    toHTML() {
        return this.template
    }
}