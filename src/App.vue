<script setup>
import Header from './components/Helpers/Header.vue'

</script>

<template>
    <Header />
    <!-- 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    -->

    <div class="p-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Can use other max widths, This is the constrainted size -->
            <div class="max-w-3xl mx-auto">
                <router-view/>
            </div>
        </div>
        
    </div>

    
    

</template>