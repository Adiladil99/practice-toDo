import {$} from '@core/dom'

export class ToDo {
    constructor(options) {
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'todo')

        this.components = this.components.map(Component => {
            const $el = $.create(Component.tagName, Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init())
    }
}