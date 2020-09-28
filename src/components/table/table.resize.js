import {$} from '../../core/dom'

export function tableResize(event, $root) {
    if (event.target.dataset.resize) {
        const $resizer = $(event.target)
        const $parent = $resizer.closest('[data-type="resizable"]')
        const coords = $parent.getCoords()
        const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)
        const type = $resizer.data.resize
        const sideProp = type === 'col' ? 'bottom' : 'right'

        $resizer.css({opacity: 1, [sideProp]: '-5000px'}) 
        
        let value

        document.onmousemove = e => {
            if (type === 'col') {
                const delta = e.pageX - coords.right
                value = coords.width + delta + 'px'
                $resizer.css({right: -delta + 'px'})
                // cells.forEach(el => el.style.width = value) 
            } else {
                const delta = e.pageY - coords.bottom
                $resizer.css({bottom: -delta + 'px'})
                value = coords.height + delta + 'px'
                
            }
        }

        document.onmouseup = e =>  {
            document.onmousemove = null
            document.onmouseup = null
            if (type === 'col') {
                cells.forEach(el => el.style.width = value) 
            } else {
                $parent.css({height: value})
            }

            $resizer.css({opacity: 0, right: 0, bottom: 0})  
        }
    }
}