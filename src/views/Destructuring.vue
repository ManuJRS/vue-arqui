<script lang="ts" setup>
import type { resolveTlsa } from 'dns'


// type Person = {
//     name: string
//     edad: number
//     estadoCivil: "soltero" | "casado"
// }

// const persona: Person = {
//     name: "Manu",
//     edad: 31,
//     estadoCivil: "soltero"
// }

// const {name, edad, estadoCivivl} = persona
// console.log(name)

// const imprimir = ({edad, ...restoPropiedades}:Person) => {
//     console.log(edad, restoPropiedades)
// }
// imprimir(persona)

const mascota: [string,number,boolean] = ["Bob", 13, true]

const [name, age, alive] = mascota

console.log(alive)


</script>

<template>
    <h1>destructuring</h1>
</template>