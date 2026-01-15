<script lang="ts" setup>
// forEch vs map

const numbers: number[] = [1, 2, 3, 4]

numbers.forEach((num) => {
    console.log(`forEach: ${num}`)
})

numbers.map((num) => {
    console.log(`map: ${num}`)
})

// Si quisiera crear un nuevo array


const double = numbers.map((num)=>{
    return num * 2
})

console.log(double)

</script>

<template>
    <h1> </h1>
</template>