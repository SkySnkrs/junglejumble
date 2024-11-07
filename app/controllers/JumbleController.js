import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js";
import { jumbleService } from "../services/JumbleService.js";

export class JumbleController {
    constructor() {
        console.log('Jumble Controller Connected 🦍')
        AppState.on('jumbles', this.drawJumble)
        jumbleService.loadJumbles()
    }


    drawJumble() {
        console.log('Drawing Jumbles From Controller')
        const jumbles = AppState.jumbles
        let jumbleHtml = ''
        jumbles.forEach(jumble => jumbleHtml += jumble.jumbleDisplay)
        setHTML('jumbleList', jumbleHtml)
    }

    createJumble() {
        console.log('Creating Jumble')
        event.preventDefault()
        const formElem = event.target
        const jumbleData = getFormData(formElem)
        jumbleService.createJumble(jumbleData)
        // @ts-ignore
        formElem.reset()
    }

}