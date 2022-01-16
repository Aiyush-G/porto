<template>
  <editor-content :editor="editor" class="hover:drop-shadow-sm hover:animate-flash"/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { Editor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

const CustomDocument = Document.extend({
  content: 'heading',
})

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        CustomDocument,
        
        StarterKit.configure({
          document: false,
          heading: {
            levels: [2],
          },
        }),
        Placeholder.configure({
          placeholder: ({ node }) => {
            if (node.type.name === 'heading') {
              return 'Your Name Here...'
            }
        
          },
        }),
      ],
      content: '',
    })

    
  },

  

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}

/* Placeholder (at the top) */
/*.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #ced4da;
  pointer-events: none;
  height: 0;
}*/

/* Placeholder (on every new line) */
.ProseMirror .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #ced4da;
  pointer-events: none;
  height: 0;
}
</style>