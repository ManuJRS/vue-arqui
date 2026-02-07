<script setup lang="ts">
const props = defineProps<{
    name: string,
    age: number
}>()
</script>

<template>
    <h1>hola</h1>
    {{ props.name }}
    {{ props.age }}
</template>