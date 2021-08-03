import {ToDoComponent} from '@core/ToDoComponent'
import {createHeader} from './header.template'

export class Header extends ToDoComponent {
    static className = 'todo__header'
    static tagName = 'header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: [],
            ...options
        })
    }

    get template() {
        return createHeader(this.state)
    }

    toHTML() {
        return this.template
    }
}