<script setup>
import { useStorage } from '@/composables/useStorage';

  let food = useStorage('food','salad');
  let age = useStorage('age','10');


    // let food= ref(localStorage.getItem('food'));
    // let age= ref(localStorage.getItem('age'));

    // watch(food, (val)=> {
    //      write(food, val);
    // });

    // watch(age, (val)=> {
    //      write(age, val);
    // });

    // function write(key, value) {
    //     localStorage.setItem(key, value);
    // }

    // setTimeout(()=>{

    // food.value = "changed";

    // },2000);


</script>

<template>
  <main>
    <p>What is favorite food?</p>
    <input type="text" v-model="food">
    <p>How old are you?</p>
    <input type="text" v-model="age">
  </main>
</template>
