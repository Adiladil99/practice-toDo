function toButton(button) {
    const meta = `
        data-nav-button=${JSON.stringify(button.value)}
    `
    return `
        <div class="nav__items" ${meta}>
            <i class="material-icons" ${meta}>${button.icon}</i>
            <span>${button.text}</span>
        </div>    
    `
}

export function createNav(s) {
    const buttons = [
        {
            icon: 'event_note',
            text: 'Заметки',
            value: 'notes'
        },
        {
            icon: 'today',
            text: 'Календарь',
            value: 'calendar'
        },
        {
            icon: 'filter_none',
            text: 'Менеджер задач',
            value: 'board'
        },
        {
            icon: 'bookmark_border',
            text: 'Дневник',
            value: 'diary'
        },
        {
            icon: 'calculate',
            text: 'Калькулятор',
            value: 'calculator'
        },
        {
            icon: 'colorize',
            text: 'Рисовалка',
            value: 'paint'
        }
    ]
    return buttons.map(toButton).join(' ')
}