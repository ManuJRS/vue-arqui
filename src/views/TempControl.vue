<script setup lang="ts">
import { ref } from 'vue'
import { TemperatureControl } from './ClasesRepaso.vue'

const tempControl = ref(new TemperatureControl(16))

function increase() {
  tempControl.value.increase()
}

function decrease() {
  tempControl.value.decrease()
}
</script>

<template>
  <div>
    <p>Temperatura: {{ tempControl.temperature }}</p>

    <button class="border mx-4 px-6 rounded bg-red-300" @click="decrease">-</button>
    <button class="border mx-4 px-6 rounded bg-green-300" @click="increase">+</button>
  </div>
</template>
