import {ToDoComponent} from '@core/ToDoComponent'
import {createNav} from './nav.template'

export class Nav extends ToDoComponent {
    static className = 'todo__nav'
    static tagName = 'nav'

    constructor($root, options) {
        super($root, {
            name: 'Nav',
            listeners: [],
            ...options
        })
    }

    get template() {
        return createNav(this.state)
    }

    toHTML() {
        return this.template
    }
}