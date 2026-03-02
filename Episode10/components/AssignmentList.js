import Assignment from "./Assignment.js";

export default {
  components: {
    Assignment,
  },
  template: `
    
      <section v-show="assignments.length">

        <h2 class="font-bold mb-2">
        {{title}}
        <span>({{assignments.length}})</span>
        </h2>

        <div class="flex gap-2">
             
        <button 
          @click="currentTag=tag"
          v-for="tag in tags" 
          class="border rounded border-gray-600 px-1 py-1 text-xs"
          :class="{
              'bg-black text-white': tag === currentTag
          }"
          >{{tag}}</button>
        

        </div>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">

                <assignment 
                  v-for="assignment in filteredAssignments" 
                  :key="assignment.id"
                  :assignment="assignment" 
                
                ></assignment>

        </ul>

      </section>  

    `,

  data() {
    return {
      currentTag: "All",
    };
  },

  props: {
    assignments: Array,
    title: String,
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "All") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },

    tags() {
      return ["All", ...new Set(this.assignments.map((a) => a.tag))];
    },
  },
};
