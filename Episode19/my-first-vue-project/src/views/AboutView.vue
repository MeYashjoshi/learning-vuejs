<script>

import flash from '../../mixins/flash';

export default{

mixins:[flash]

}


</script>




<template>
  <div class="about">
      <button @click="falsh('It works on the about page!')">Click Me</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
