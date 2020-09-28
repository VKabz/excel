import { ExcelComponent } from "../../core/ExcelComponent";
import { createColumn } from "./table.template";
import { tableResize } from "./table.resize";
import { TableSelection } from "./TableSelection";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    onMousedown(event) {
        tableResize(event, this.$root)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        let $el = this.$root.find('[data-id="0:0"]')

        this.selection.selected($el)
    }
    

    toHTML() {
        return createColumn(30)
    }
}
