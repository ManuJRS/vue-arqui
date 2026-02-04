<script setup lang="ts">
import { computed } from 'vue';

const {status} = defineProps<{status:'active'|'inactive'|'pending'}>()

const LABELS = {
  active: 'Activo',
  inactive: 'Inactivo',
  pending: 'Pendiente',
} as const

const CLASSES = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  pending: 'bg-yellow-100 text-yellow-800',
} as const



const label = computed(()=> LABELS[status])
const classes = computed(()=>CLASSES[status])

</script>

<template>
<span :class="classes">{{ label }}</span>
</template>