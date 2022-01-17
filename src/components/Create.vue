<script setup lang="js">
    //import store from '../store/index'
    //store.commit("setName", "Bob")

    import store from '../store/index'

    import TEditor from './Helpers/TEditor.vue'
    import Header from './Helpers/Header.vue'
    import VTypical from 'vue-typical';
    import TitleTip from './Helpers/TitleTip.vue' 
    import Button from "./Helpers/Button.vue"

    
    export default {

        data(){
            return{
                titleError: false,
            }
        },

        computed: {
            builder: function(){
                return store.state.builder
            }
        },

        methods: {
            titleErrorToggle: function(){
                if (this.builder.titleName !== null) {
                    console.log(this.builder.titleName)
                }
                else {
                    console.log("title error")
                    this.titleError = true      
                }
                
            }
        },
        components: {
            TEditor,
            Header,
            VTypical,
            TitleTip,
            Button,
           
        },


        
    }
    
</script>

<template>
    <div class="p-4">
        <Header />
        
       

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Can use other max widths, This is the constrainted size -->
            <div class="max-w-3xl mx-auto">
                <!-- <TEditor/> -->
                <br>
                <TitleTip v-bind:class="{'animate-bounce': titleError}"/>
                <br>
                
                <p>Porto is a 
                    <span>

                    <Button isGray="true">
                        <v-typical
                            class="blink "
                            :steps="['portfolio builder', 3000, 'portfolio designer', 1500, 'portfolio copywriter', 1500, 'powerful sitebuilder', 1500, 'portfolio creator', 500, 'portfolio builder', 1500]"
                            
                            :wrapper="'p'"
                        ></v-typical>

                    </Button>

                    
                    </span>  
                    
                    that works like a 
                    <span>
                        <Button isGray="true" >doc</Button>
                    </span>  
                    </p>
                <p>Write in <em>markdown</em> or use the <em>smart menu</em> as you type.</p>
                <br>
                <ul class="list-disc">
                    <li>
                        <p>📝 Focus on your content from the start </p>
                    </li>
                    <li>
                        <p>⭐ We help your work stand out with unique layouts</p>

                    </li>
                    <li>
                        <p>🚀 Boost your creation with <em>professionally</em> pre-written templates</p>
                    </li>
                </ul>
                <br>
                <Button isRed="true" v-on:click="titleErrorToggle">Create Your First Portfolio</Button>           
                <br>
                <Button>Finished Examples</Button>  
                <br>
                <Button>Blog & Help Docs</Button> 
                 
            </div>
        </div>
        
    </div>
  
</template>

<style>

</style>