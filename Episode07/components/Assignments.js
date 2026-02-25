import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },

  template: `

        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="completed"></assignment-list>
 
      
    
      
      `,

  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: true, id: "1" },
        { name: "Watch project video", complete: false, id: "2" },
        { name: "Create repository", complete: false, id: "3" },
        { name: "Push in github", complete: false, id: "4" },
      ],
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
};
