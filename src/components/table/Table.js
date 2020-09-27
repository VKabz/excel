import { ExcelComponent } from "../../core/ExcelComponent";
import { createColumn } from "./table.template";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return createColumn(30)
    }
}
