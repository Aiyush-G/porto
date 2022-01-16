<script setup>
import Create from './components/Create.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>

    <Create />

</template>