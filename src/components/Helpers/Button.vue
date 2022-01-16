<template>
  <button data-tilt data-tilt-glare data-tilt-max-glare="0.8" :class="[
  mainButton, 
  { 'text-red-500 border-red-500': isRed },
  { 'text-black border-gray-100': isGray },
  { 'hover:shadow hover:shadow-red-500/40' : isHover},

  ]" >
    <slot></slot>
  </button>
</template>

<script>
export default {
    data: ()=>({
        mainButton: [ "transition", "duration-300","m-0.5", "border-solid", "border", "rounded-md", "py-0.1", "px-2", "bg-white", "font-sans"],
       

    }),

    props: {
        
        isRed: {
            default: false,
        },

        isGray:{
            default: false,
        },

        isHover: {
            default: true,
        },

        color : {
            type: String, 
            default: "red"
        }
        
    }
}
</script>

<style>

</style>