import {ToDoComponent} from '@core/ToDoComponent'

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

    toHTML() {
        return `
        <div class="title">
            <h1>Менеджер задач</h1>
        </div>
        <div class="header_menu">
            <button class="header_menu_buttons">
                <i class="material-icons">comment</i>
                <span>Комментарий</span>
            </button>
            <button class="header_menu_buttons">
                <i class="material-icons">person_add</i>
                <span>Общий доступ</span>
            </button>
            <button class="header_menu_buttons">
                <i class="material-icons">sort</i>
                <span>Сортировать</span>
            </button>
            <button class="header_menu_buttons">
                <i class="material-icons">more_horiz</i>
            </button>
        </div>
        `
    }
}