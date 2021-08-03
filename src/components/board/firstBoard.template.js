function board(type, id) {
    return `
        <div class="firstBoard" data-block="firstBoard" data-id="${id}">
            <input placeholder="Название раздела" data-title="title" data-title-id="${id}"></input>
            <div>
                <button class="add" id="butAdd" data-button_add="${type}" disabled>Добавить раздел</button>
                <button>Отмена</button>
            </div>
        </div>
    `
}

export function createFirstBoard(s, type, id) {
    return board(type, id)
}