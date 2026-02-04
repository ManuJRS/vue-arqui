<script setup lang="ts">
import { computed } from 'vue';

const {price} = defineProps<{price: number}>()

const formatted = computed(() => new Intl.NumberFormat('es-MX', {
  style: 'currency', currency: 'MXN'
}).format(price))


</script>

<template>
{{ formatted }}
</template>