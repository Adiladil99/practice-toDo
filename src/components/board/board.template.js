function board(title, now) {
    return `
        <div class="main__items" data-id=${now}>
            <div class="item__header">
                <div class="counter">
                    <h3>${title}</h3>
                    <span data-count=${now}>0</span>
                </div>                                
                <button class="header_menu_buttons">
                    <i class="material-icons">more_horiz</i>
                </button>
            </div>

            <div class="item__tasks" data-block="tasks" data-block-id=${now}>

            </div>

            <div class="add__items" data-id=${now}>
                <button class="header_menu_buttons" data-button_add="addTask" data-id=${now}>
                    <i class="material-icons" data-button_add="addTask" data-id=${now}>add</i>
                    <span data-button_add="addTask" data-id=${now}>Добавить задачу</span>
                </button>
            </div>
        </div>

        <div class="end__add" data-button_add="addSection" id="end">
            <button class="end__add__button" data-button_add="addSection">
                <i class="material-icons" data-button_add="addSection">add</i>
                <span data-button_add="addSection">Добавить раздел</span>
            </button>
        </div>
    `
}

function task(now, title, description) {
    return `
                <div class="task" data-tasksnum=${now}>
                    <button class="circle"></button>
                    <div>
                        <span>${title}</span>
                        <p>${description}</p>
                    </div>                                         
                    <button class="header_menu_buttons">
                        <i class="material-icons">more_horiz</i>
                    </button>
                </div>
    `
}

function addTask(now) {
    return `
                <div class="addTask" data-tasksnum=${now}>
                    <div class="inputText">
                        <input class="input_in" placeholder="Наименование" data-title="title"></input>
                        <textarea class="input_in" placeholder="Описание" data-title="description"></textarea>
                    </div>    

                    <div class="buttonn">
                        <button class="add" id="butAdd" data-button_add="insertTask" disabled data-id=${now}>Добавить задачу</button>
                        <button>Отмена</button>
                    </div>
                </div>
    `
}

function section(now, title) {
    return `
        <div class="add__tasks" data-button_add="sectionS" data-addId="${now}">
            <p data-button_add="sectionS" data-addId="${now}">Добавить раздел</p>
        </div>

        <div class="main__items" data-id=${now}>
            <div class="item__header">
                <div class="counter">
                    <h3>${title}</h3>
                    <span data-count=${now}>0</span>
                </div>                                
                <button class="header_menu_buttons">
                    <i class="material-icons">more_horiz</i>
                </button>
            </div>

            <div class="item__tasks" data-block="tasks" data-block-id=${now}>

            </div>

            <div hidden class="add__items" data-id=${now}>
                <button class="header_menu_buttons" data-button_add="addTask" data-id=${now}>
                    <i class="material-icons" data-button_add="addTask" data-id=${now}>add</i>
                    <span data-button_add="addTask" data-id=${now}>Добавить задачу</span>
                </button>
            </div>
        </div>
        
    `
}

function dateNow() {
    return Date.now().toString()    
}

export function createBoard(title) {
    return board(title, dateNow())
}

export function createTasks(title, description) {
    return task(dateNow(), title, description)
}

export function addTasks() {
    return addTask(dateNow())
}

export function createSection(title) {
    return section(dateNow(), title)
}