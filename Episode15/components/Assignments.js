import AssignmentList from "./AssignmentList.js";
import assignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    assignmentCreate,
  },

  template: `

    <section class="flex gap-8">
        <assignment-list :assignments="inProgressAssignments" title="In Progress">
        
          <assignment-create @add="add"></assignment-create>

        </assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed" can-toggel></assignment-list>

      
      

    </section>
      
      `,

  data() {
    return {
      assignments: [],

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

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
