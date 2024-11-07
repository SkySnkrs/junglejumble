import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"


class JumbleService {

    createJumble(jumbleData) {
        const jumble = new Jumble(jumbleData)
        AppState.jumbles.push(jumble)
        console.log(AppState.jumbles)
        this.saveJumbles()
    }

    saveJumbles() {
        saveState('jumbles', AppState.jumbles)
    }

    loadJumbles() {
        const jumbles = loadState('jumbles', [Jumble])
        if (jumbles.length == 0) {
            AppState.emit('jumbles')
        }
        else {
            AppState.jumbles = jumbles
        }
    }
}

export const jumbleService = new JumbleService()