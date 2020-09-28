
const charIndex = {
    A: 65,
    Z: 90
}



function createAlphabetColumn(_, index) {
        return `
            <div class="column" data-type="resizable" data-col=${index}>
                ${String.fromCharCode(charIndex.A + index)}
                <div class="col-resize" data-resize="col"></div>
            </div>
        `
}


function createCell(rowIndex) {
   return (_, index) => `<div class="cell" data-col=${index} data-id=${`${rowIndex}:${index}`} contenteditable=""></div>`
}


function getColumn(content, info) {

    const resize = info !== null ? '<div class="row-resize" data-resize="row"></div>' : ''

    return `
        <div data-type="resizable" class="row">
            <div class="row-info">${info !== null ? info : ''}
            ${resize}
            </div>
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
        .map(createAlphabetColumn)
        .join('')

    tablesArray.push(getColumn(firstColumns, null))

    for (let i = 0; i < rowsCount; i++) {
        let cels = new Array(charDifference)
            .fill('')
            .map(createCell(i))
            .join('')
            
        tablesArray.push(getColumn(cels, i+1))
    }

    return tablesArray.join('')
}   