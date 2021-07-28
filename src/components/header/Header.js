import {ToDoComponent} from '@core/ToDoComponent'

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

    toHTML() {
        return `
        <div class="leftblock">
            <div class="button">
                <i class="material-icons">menu</i>
            </div>
            <div class="button">
                <i class="material-icons">home</i>
            </div>
            <div class="search">
                <i class="material-icons">search</i>
                <input type="text" class="input" size="40" placeholder="Поиск">
            </div>
        </div>

        <div class="rightblock">
            <div class="button">
                <i class="material-icons">add</i>
            </div>
            <div class="button">
                <i class="material-icons">notifications_none</i>
            </div>
            <div class="button">
                <i class="material-icons">settings</i>
            </div>
            <div class="button">
                <i class="material-icons">account_circle</i>
            </div>
        </div>
        `
    }
}