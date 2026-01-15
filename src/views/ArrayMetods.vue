<script lang="ts" setup>
// map
const numbers:number[] = [1, 2, 3, 4, 5]

const vieNumbers: number[] = numbers.map(num => num)
console.log(vieNumbers)

// forEch

const prices: number [] = [100, 200, 300]
let suma = 0


prices.forEach(num => {
    suma += num
});

console.log(suma)

</script>

<template>
    <h1>Arrays</h1>
</template>