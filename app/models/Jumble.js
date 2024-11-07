import { generateId } from "../utils/GenerateId.js";


export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        this.fastestTime = data.fastestTime
        this.startTime = 0
    }

    get jumbleDisplay() {
        return `
        <div class="d-md-flex justify-content-between align-items-center mb-2">
            <div>
                <button onclick="app.JumblesController.setActiveJumble('${this.id}')" class="btn btn-warning fw-bold" type="button">
                    start
                </button>
                <b>${this.name}</b>
            </div>
            <div class="${this.fastestTime == Infinity ? 'd-none' : ''}">
                <span class="fw-bold me-2" title="Fastest time is ${this.fastestTime}">⏲️</span>
                <span class="fw-bold">wpm</span>
            </div>
        </div>
        <hr>
        `
    }

    get activeDisplay() {
        return `
        <div class="row d-flex justify-content-between jumble-card p-3">
          <div class="col-md-6">
            <span class="fs-3 fw-bold text-center">Name</span>
          </div>
          <div class="col-md-6">
            <span class="text-center fs-3 fw-bold">Fastest Time</span>
          </div>
          <div class="col-12">
            <p class="mt-2">THIS IS DESCRIPTION</p>
          </div>
        </div>
        `
    }
}


