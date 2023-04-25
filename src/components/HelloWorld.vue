<template>
    <div class="w-10/12 mx-auto">
        <img
            alt="Vue logo"
            src="../assets/vue.svg"
            class="w-3/12 mx-auto mb-5"
        />
        
        <div class="w-7/12 mx-auto text-center">
          <h3>Counter Example</h3>
          <br />
  
          <span>
              your counter is
              <span style="color: red; font-weight: 600">{{ counterRef }}</span>
          </span>
  
          <br />
          <br />
  
          <span>
              Using computed:
              <em>{{ showMes }}</em>
          </span>
  
          <br />
          <br />
  
          <span>
              Using watch:
              <b>{{ watchMes }}</b>
          </span>
  
          <br />
          <button
              class="btn"
              @click="increase"
          >+</button>
          <button
              class="btn"
              @click="decrease"
          >-</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed, watch } from 'vue'

// data
const counterRef = ref(0);
const watchMes = ref("");

// life cycle
onMounted(() => (counterRef.value = 5));

// computed
const showMes = computed(
    () => `you're now counting to ${counterRef.value}`
);

// watch
watch(
    () => showMes.value,
    (value) => (watchMes.value = `Monitoring showMes: ${value}`)
);

// methods
const increase = () => counterRef.value++;
const decrease = () => counterRef.value--;

    // export to template
    // return {
    //   counterRef,
    //   showMes,
    //   watchMes,
    //   increase,
    //   decrease,
    // };
</script>

<style>

.btn {
    margin: 0.8rem;
    width: 4rem;
    height: 2rem;
    line-height: 1.5rem;
}
</style>
