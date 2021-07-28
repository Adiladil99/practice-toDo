import {ToDoComponent} from '@core/ToDoComponent'

export class Board extends ToDoComponent {
    static className = 'todo__content'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'Board',
            listeners: [],
            ...options
        })
    }

    toHTML() {
        return `
        <div class="main__items">
            <div class="item__header">
                <div class="counter">
                    <h3>Title</h3>
                    <span>0</span>
                </div>                                
                <button class="header_menu_buttons">
                    <i class="material-icons">more_horiz</i>
                </button>
            </div>

            <div class="item__tasks">
                <div class="task">1</div>
                <div class="task">2</div>
                <div class="task">3</div>
            </div>

            <div class="add__items">
                <button class="header_menu_buttons">
                    <i class="material-icons">add</i>
                    <span>Добавить задачу</span>
                </button>
            </div>
        </div>

        <div class="add__tasks">
            <p>Добавить раздел</p>
        </div>

        <div class="main__items">
            <div class="item__header">
                <div class="counter">
                    <h3>Title</h3>
                    <span>0</span>
                </div>                                
                <button class="header_menu_buttons">
                    <i class="material-icons">more_horiz</i>
                </button>
            </div>

            <div class="item__tasks">
                <div class="task">1</div>
                <div class="task">2</div>
                <div class="task">3</div>
            </div>

            <div class="add__items">
                <button class="header_menu_buttons">
                    <i class="material-icons">add</i>
                    <span>Добавить задачу</span>
                </button>
            </div>
        </div>

        <div class="end__add">
            <button class="end__add__button">
                <i class="material-icons">add</i>
                <span>Добавить раздел</span>
            </button>
        </div>
        `
    }
}