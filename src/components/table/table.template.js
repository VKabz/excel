
const charIndex = {
    A: 65,
    Z: 90
}



function createAlphabetColumn(string) {
    return `
        <div class="column">
            ${string}
        </div>
    `
}


function createCell(string) {
    return `
        <div class="cell" contenteditable="">${string}</div>
    `
}

function getColumn(content = '', info = '') {
    return `
        <div class="row">
            <div class="row-info">${info}</div>
            <div class="row-data">
                ${content}
            </div>
        </div>
    `
}

export function createColumn(rowsCount = 15) {

    let charDifference = charIndex.Z - charIndex.A + 1

    let tablesArray = new Array

    let firstColumns = new Array(charDifference)
        .fill('')
        .map((_, index) => createAlphabetColumn(String.fromCharCode(charIndex.A + index)))
        .join('')

    tablesArray.push(getColumn(firstColumns))

    for (let i = 0; i < rowsCount; i++) {

        let cels = new Array(charDifference)
            .fill('')
            .map((_, index) => createCell(`${String.fromCharCode(charIndex.A + index)}${i+1}`))
            .join('')

        tablesArray.push(getColumn(cels, i+1))
    }

    return tablesArray.join('')
}   