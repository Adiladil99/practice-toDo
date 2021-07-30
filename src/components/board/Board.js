import {ToDoComponent} from '@core/ToDoComponent'
import {createBoard, createSection, createTasks} from './board.template'
import {$} from '@core/dom'
import {createFirstBoard} from './firstBoard.template'

export class Board extends ToDoComponent {
    static className = 'todo__content'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'Board',
            listeners: ['click', 'input'],
            ...options
        })
    }

    get template() {
        return createFirstBoard(this.state)
    }

    toHTML() {
        return this.template
    }

    onInput(event) {
        const title = document.querySelector('[data-title="title"]').value
        const button = document.querySelector('[data-button_add="razdel"]')
        console.log(button)
        if (title !== '') {
            button.removeAttribute('disabled')
            button.classList.add('d')
        } else {
            button.setAttribute('disabled', 'disabled')
            button.classList.remove('d')
        } 
    }

    onClick(event) {
        const $target = $(event.target)
        const $but = $target.data.button_add

        if ($but === 'razdel') {
            const els = document.querySelector('[data-block="firstBoard"]')
            const title = document.querySelector('[data-title="title"]').value
            title !== '' ? console.log('no') : console.log('yes')
            els.remove()
            const els1 = document.querySelector('.todo__content')
            els1.innerHTML = createBoard(title)
        } else if ($but === 'addTask') {
            const tasks = document.querySelector('[data-block="tasks"]')
            console.log($but)
            tasks.insertAdjacentHTML('beforeend', createTasks())            
        } else if ($but === 'addSection') {
            const elem = document.querySelector('#end')
            console.log(elem)
            elem.insertAdjacentHTML('beforebegin', createSection())            
        } else if ($but === 'addSectionS') {
            const els = document.querySelector('[data-button_add="addSectionS"]')
            console.log(els)
            els.insertAdjacentHTML('beforebegin', createSection())            
        }
    }
}