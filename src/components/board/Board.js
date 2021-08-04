import {ToDoComponent} from '@core/ToDoComponent'
import {addTasks, createBoard, createSection, createTasks} from './board.template'
import {$} from '@core/dom'
import {createFirstBoard} from './firstBoard.template'

export class Board extends ToDoComponent {
    static className = 'todo__content'
    static tagName = 'div'

    constructor($root, options) {
        super($root, {
            name: 'Board',
            listeners: ['click', 'input', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'],
            ...options
        })
    }

    get template() {
        return createFirstBoard(this.state, 'razdel')
    }

    toHTML() {
        return this.template
    }

    onDragstart(event) {
        const $target = $(event.target)
        const $block = $target.data.type
        if ($block === 'taskdrag') {
            event.target.classList.add('hold')
            setTimeout(() => event.target.classList.add('hide'), 0)
        }
        console.log('onDragstart') 
    }

    onDragend(event) {
        const $target = $(event.target)
        const $block = $target.data.type
        if ($block === 'taskdrag') {
            event.target.className = 'task'
        }
        console.log('onDragend')        
    }

    onDragover(event) {
        const $target = $(event.target)
        const $block = $target.data.block
        if ($block === 'tasks') {
            event.preventDefault()
        }
        console.log('onDragover')
    }

    onDragenter(event) {
        const $target = $(event.target)
        const $block = $target.data.block
        if ($block === 'tasks') {
            event.target.classList.add('hovered')
        }
        console.log('onDragenter')
    }

    onDragleave(event) {
        const $target = $(event.target)
        const $block = $target.data.block
        if ($block === 'tasks') {
            event.target.classList.remove('hovered')
        }
        console.log('onDragleave')
    }

    onDrop(event) {
        const $target = $(event.target)
        const $block = $target.data.block
        const els = document.querySelector('.hold')

        if ($block === 'tasks') {
            event.target.classList.remove('hovered')
            event.target.append(els)
        }
        console.log('onDrop')
    }

    onInput(event) {
        const title = document.querySelector(`[data-title="title"]`).value
        const button = document.querySelector('#butAdd')
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
        const $id = $target.data.id || $target.data.addid

        if ($but === 'razdel') {
            const els = document.querySelector('[data-block="firstBoard"]')
            const title = document.querySelector('[data-title="title"]').value
            els.remove()
            const els1 = document.querySelector('.todo__content')
            els1.innerHTML = createBoard(title)
        } else if ($but === 'addTask') {
            document.querySelectorAll('.add__items, .end__add').forEach(item => item.style.display = 'none')
            const tasks = document.querySelector(`[data-block-id="${$id}"]`)
            tasks.insertAdjacentHTML('beforeend', addTasks())
            const headerCount = document.querySelector(`[data-count="${$id}"]`)
            headerCount.innerHTML = tasks.childElementCount  
        } else if ($but === 'addSection') {
            document.querySelectorAll('.add__items, .end__add').forEach(item => item.style.display = 'none')
            const elem = document.querySelector('#end')
            elem.insertAdjacentHTML('beforebegin', createFirstBoard(this.state, 'thisRazdel'))            
        } else if ($but === 'sectionS') {
            const els = document.querySelector(`[data-addId="${$id}"]`)
            els.insertAdjacentHTML('beforebegin', createFirstBoard(this.state, 'thisRazdel'))            
        } else if ($but === 'thisRazdel') {
            document.querySelectorAll('.add__items, .end__add').forEach(item => item.style.display = 'flex')
            const $parent = $target.closest(`[data-id="${$id}"]`)
            const text = document.querySelector(`[data-title-id="${$id}"]`).value
            $parent.$el.insertAdjacentHTML('beforebegin', createSection(text))     
            $parent.$el.remove()
        } else if ($but === 'insertTask') {
            document.querySelectorAll('.add__items, .end__add').forEach(item => item.style.display = 'flex')
            const $parent = $target.closest(`[data-tasksnum="${$id}"]`)
            const title = document.querySelector(`[data-title="title"]`).value
            const description = document.querySelector(`[data-title="description"]`).value
            $parent.$el.insertAdjacentHTML('beforebegin', createTasks(title, description))     
            $parent.$el.remove()
        }
    }
}