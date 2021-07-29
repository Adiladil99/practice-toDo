function buttons(button) {
    const meta = `
        data-menu-title=${JSON.stringify(button.icon)}
    `

    return `
            <button class="header_menu_buttons" ${meta}>
                <i class="material-icons" ${meta}>${button.icon}</i>
                <span>${button.value}</span>
            </button>
    `
}

export function createTitle(s) {
    const titleName = 'Менеджер задач'
    const menus = [
        {
            icon: 'comment',
            value: 'Комментарий'
        },
        {
            icon: 'person_add',
            value: 'Общий доступ'
        },
        {
            icon: 'sort',
            value: 'Сортировать'
        },
        {
            icon: 'more_horiz',
            value: ''
        }
    ]

    const title = `
        <div class="title">
            <h1>${titleName}</h1>
        </div>`
    
    const right = `
        <div class="header_menu"> ${menus.map(buttons).join(' ')} </div>
    `

    return title + right
}