import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },

  template: `

    <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="completed"></assignment-list>
 
      
        <form @submit.prevent="add">
            <div class="border border-gray-600">
              <input v-model="newAssignment" placeholder="New Assignments..." class="text-black p-2"/>
              <button type="submit" class="text-black p-2 border-l border-gray-600">Add</button>
            </div>
        </form>
    </section>
      
      `,

  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: true, id: "1" },
        { name: "Watch project video", complete: false, id: "2" },
        { name: "Create repository", complete: false, id: "3" },
        { name: "Push in github", complete: false, id: "4" },
      ],

      newAssignment: "",
    };
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((a) => a.complete);
    },
    inProgressAssignments() {
      return this.assignments.filter((a) => !a.complete);
    },
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
