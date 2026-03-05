export default {
  template: `
    
        <div class="flex gap-2">
             
          <button 
            @click="$emit('update:currentTag',tag)"
            v-for="tag in tags" 
            class="border rounded border-gray-600 px-1 py-1 text-xs"
            :class="{
                'bg-black text-white': tag === currentTag
            }"
            >{{tag}}</button>
        

        </div>

    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["All", ...new Set(this.initialTags)];
    },
  },
};
