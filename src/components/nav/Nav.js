import {ToDoComponent} from '@core/ToDoComponent'

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

    toHTML() {
        return `
            <div class="nav__items">
                <i class="material-icons">event_note</i>
                <p>Заметки</p>
            </div>
            <div class="nav__items">
                <i class="material-icons">today</i>
                <p>Календарь</p>
            </div>
            <div class="nav__items">
                <i class="material-icons">filter_none</i>
                <p>Менеджер задач</p>
            </div>
            <div class="nav__items">
                <i class="material-icons">bookmark_border</i>
                <p>Дневник</p>
            </div>
            <div class="nav__items">
                <i class="material-icons">colorize</i>
                <p>Рисовалка</p>
            </div>
        `
    }
}