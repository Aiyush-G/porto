// store/index.js
import { createStore } from 'vuex'

import stack from './modules/stack'
import builder from './modules/builder'

const store = createStore({
    modules: {
        stack,
        builder,
    },
})

export default store
