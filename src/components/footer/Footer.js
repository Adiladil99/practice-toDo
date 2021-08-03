import {ToDoComponent} from '@core/ToDoComponent'

export class Footer extends ToDoComponent {
    static className = 'todo__footer'
    static tagName = 'footer'

    constructor($root, options) {
        super($root, {
            name: 'Footer',
            listeners: [],
            ...options
        })
    }

    toHTML() {
        return `
        <div></div>
        `
    }
}