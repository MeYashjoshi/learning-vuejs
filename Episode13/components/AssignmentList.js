import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
  components: {
    Assignment,
    AssignmentTags,
  },
  template: `
    
      <section v-show="assignments.length">

        <h2 class="font-bold mb-2">
        {{title}}
        <span>({{assignments.length}})</span>
        </h2> 

        <assignment-tags 
          v-model:currentTag="currentTag"
          :initial-tags="assignments.map(a=>a.tag)"
          />


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
  },
};
