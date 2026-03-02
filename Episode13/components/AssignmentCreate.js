export default {
  template: `
    
        <form @submit.prevent="add">
            <div class="border border-gray-600">
              <input v-model="newAssignment" placeholder="New Assignments..." class="text-black p-2"/>
              <button type="submit" class="text-black p-2 border-l border-gray-600">Add</button>
            </div>
        </form>

    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
