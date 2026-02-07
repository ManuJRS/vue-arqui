<script setup lang="ts">
const props = defineProps<{
    Title: string
    Price: number
    InStockL: boolean
}>()



</script>

<template>
    <h1>cards product</h1>
    {{ props.Title }}
    {{ props.Price }}
    {{ props.InStockL }}

    <p v-if="props.InStockL">Disponible</p>
    <p v-else>Agotado</p>
    <p v-if="Price===0">Gratis</p>
</template>