<template>
 <!-- Header -->
    
    <div class="grid grid-cols-2 items-center">
        
        <div>
            <Button>Dashboard</Button>
            <Button>Settings</Button>
            <Button>Preview</Button>
            <Button isRed="true">Publish</Button>
        </div>
        

        <h1 class="ml3 font-black text-5xl justify-self-end">Porto</h1>
    </div>

    <!-- Divider -->
    <main class="py-4">
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
                <p></p>
            </div>
        </div>


    </main>
</template>

<script>

//const Flowbite = require("https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js") 
//const Anime = require("https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js")
//const VanillaTilt = require("../js/vanilla-tilt")

import Button from "./Button.vue"



export default {
    

    mounted() {
        // Header Animation
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
        })
        
    },

    components: {
        Button,
    }
}
</script>


<style>

</style>