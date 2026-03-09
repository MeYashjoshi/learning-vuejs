<script setup>
import TheWelcome from '../components/TheWelcome.vue';
  import { ref } from 'vue';

    let message= ref("Hello, World!");

    setTimeout(()=>{

      message.value = "I have been changed";

    },2000);

</script>

<template>
  <main>
    <TheWelcome />
    <p>{{message }}</p>

    <input type="text" v-model="message">
  </main>
</template>
