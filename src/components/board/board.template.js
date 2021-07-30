function board(title) {
    const now = Date.now().toString()
    return `
        <div class="main__items" data-id=${now}>
            <div class="item__header">
                <div class="counter">
                    <h3>${title}</h3>
                    <span>0</span>
                </div>                                
                <button class="header_menu_buttons">
                    <i class="material-icons">more_horiz</i>
                </button>
            </div>

            <div class="item__tasks" data-block="tasks" data-id=${now}>

            </div>

            <div class="add__items" data-id=${now}>
                <button class="header_menu_buttons" data-button_add="addTask" data-id=${now}>
                    <i class="material-icons" data-button_add="addTask" data-id=${now}>add</i>
                    <span data-button_add="addTask" data-id=${now}>Добавить задачу</span>
                </button>
            </div>
        </div>

        <div class="add__tasks" data-button_add="addSectionS">
            <p data-button_add="addSectionS">Добавить раздел</p>
        </div>

        <div class="end__add" data-button_add="addSection" id="end">
            <button class="end__add__button" data-button_add="addSection">
                <i class="material-icons" data-button_add="addSection">add</i>
                <span data-button_add="addSection">Добавить раздел</span>
            </button>
        </div>
    `
}

function task() {
    return `
                <div class="task">
                    <div><i class="material-icons">done</i></div>
                    <div>
                        <span>Title</span>
                        <p>Title</p>
                        <p>Завтра</p>
                    </div>
                </div>
    `
}

function section() {
    return `
        <div class="add__tasks" data-button_add="addSectionS">
            <p data-button_add="addSectionS">Добавить раздел</p>
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

            <div class="item__tasks" data-block="tasks">

            </div>

            <div class="add__items">
                <button class="header_menu_buttons" data-button_add="addTask">
                    <i class="material-icons" data-button_add="addTask">add</i>
                    <span data-button_add="addTask">Добавить задачу</span>
                </button>
            </div>
        </div>
    `
}

export function createBoard(title) {
    return board(title)
}

export function createTasks() {
    return task()
}

export function createSection() {
    return section()
}