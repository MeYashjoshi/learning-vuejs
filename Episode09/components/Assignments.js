import AssignmentList from "./AssignmentList.js";
import assignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    assignmentCreate,
  },

  template: `

    <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

        <assignment-create @add="add"></assignment-create>
      

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
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
