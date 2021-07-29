function buttons(button) {
    const meta = `
        data-button=${JSON.stringify(button.value)}
    `

    return `
            <div class="button" ${meta}>
                <i class="material-icons" ${meta}>${button.icon}</i>
            </div>
    `
}

export function createHeader(s) {
    const buttonsL = [
        {
            icon: 'menu',
            value: 'home'
        },
        {
            icon: 'home',
            value: 'home'
        }
    ]
    const buttonsR = [
        {
            icon: 'add',
            value: 'add'
        },
        {
            icon: 'notifications_none',
            value: 'noti'
        },
        {
            icon: 'settings',
            value: 'setting'
        },
        {
            icon: 'account_circle',
            value: 'account'
        }
    ]

    const left = `
        <div class="leftblock"> ${buttonsL.map(buttons).join(' ')} 
            <div class="search">
                <i class="material-icons">search</i>
                <input type="text" class="input" size="40" placeholder="Поиск">
            </div>
        </div>`
    
    const right = `
        <div class="rightblock"> ${buttonsR.map(buttons).join(' ')} </div>
    `

    return left + right
}