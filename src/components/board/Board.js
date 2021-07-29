import {ToDoComponent} from '@core/ToDoComponent'
import {createBoard} from './board.template'
import {$} from '@core/dom'

export class Board extends ToDoComponent {
    static className = 'todo__content'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'Board',
            listeners: ['click'],
            ...options
        })
    }

    get template() {
        return createBoard(this.state)
    }

    toHTML() {
        return this.template
    }

    onClick(event) {
        const $target = $(event.target)

        if ($target.data.button_add === 'add') {
            console.log($target.parentNode.nodeName)
            return `
            <div class="item__tasks">
                <div class="task">
                    <div><i class="material-icons">done</i></div>
                    <div>
                        <span>Title</span>
                        <p>Title</p>
                        <p>Завтра</p>
                    </div>
                </div>
            </div>
            `
        }
    }
}