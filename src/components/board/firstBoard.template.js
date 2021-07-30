function board() {
    return `
        <div class="firstBoard" data-block="firstBoard">
            <input placeholder="Название раздела" data-title="title"></input>
            <div>
                <button class="add" data-button_add="razdel" disabled>Добавить раздел</button>
                <button>Отмена</button>
            </div>
        </div>
    `
}

export function createFirstBoard(s) {
    return board()
}