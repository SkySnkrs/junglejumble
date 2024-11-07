import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumbles = [
    new Jumble({ name: '🐈 Jumble', body: 'The lush jungle teems with vibrant wildlife, towering trees, hidden rivers, and the sounds of nature.' }),
    new Jumble({ name: '🐕 Jumble', body: 'In the heart of the dense jungle, exotic animals roam freely, vibrant plants flourish, and rivers wind through towering trees, filling the air with life’s melody.' }),
    new Jumble({ name: '🦅 Jumble', body: 'Deep in the jungle, sunlight filters through the thick canopy, casting dappled shadows on vibrant plants and winding rivers. Monkeys chatter from treetops, exotic birds sing, and hidden creatures rustle unseen, creating an enchanting symphony of wild nature’s wonders.' }),
    new Jumble({ name: '🦍 Jumble', body: 'In the lush, vibrant jungle, towering trees stretch endlessly skyward, their dense canopy sheltering countless life forms below. Colorful parrots and toucans flit between branches, while monkeys swing playfully overhead. The earthy scent of wet soil and fresh leaves mingles with the rhythmic sounds of flowing rivers, rustling foliage, and distant animal calls, creating an unforgettable symphony of natural harmony and mystery.' })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())