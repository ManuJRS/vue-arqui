<script setup lang="ts">
const emit = defineEmits<{
  (e: 'clicked', message: string): void
  (e: 'click-two', message:string): void
}>()

const handleClick = () => {
  emit('clicked', 'Hola desde el componente hijo 👋')
}
const clickBtn = () => {
    emit('click-two', 'este es el segundo mensaje')
}
</script>

<template>
  <button @click="handleClick">
    Click desde el hijo
  </button>
</template>
