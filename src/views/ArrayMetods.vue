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

// Sumar Valores

type Products = {
    name: string
    price: number
}

const products: Products []= [
{ 
    name: "Mouse", 
    price: 300 
},
{ 
    name: "Keyboard", 
    price: 700 
}
]

let totalProd: number = 0

products.forEach((num: Products)=> {
    totalProd += num.price
})
console.log(totalProd)

// completar tareas

type Tasks = {
    title: string
    completed: boolean
}

const tasks: Tasks [] = [
  { title: "Login", completed: false },
  { title: "Fetch data", completed: false }
]

tasks.forEach((task: Tasks)=> {
    task.completed = true
})

console.log(tasks)

// sumar datos

const prices: number[] = [100, 250, 50]

let sumPrices: number = 0

prices.forEach((price: number)=> {
    sumPrices += price
})

console.log(sumPrices)

</script>

<template>
    <h1> </h1>
</template>