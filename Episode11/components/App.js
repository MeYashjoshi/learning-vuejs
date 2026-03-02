import Assignments from "./Assignments.js";
export default {
  components: {
    Assignments,
  },

  template: `
      <assignments></assignments>

      <button @click="handleClick($event)">
  Click Me
</button>
  `,

  methods: {
    handleClick(event) {
      console.log(event.target.value);
    },
  },
};
