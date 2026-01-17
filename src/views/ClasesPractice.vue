<script setup lang="ts">

class Person {
    private name: string; //significa que solo tendre acceso a esa propiedad dentro de esta clase
    public apellido: string; //significa que va a poder ser vista desde afuera de la clase
    apodo: string;
}

//instanciar una clase (sirve para crear un objeto)
const amigo: Person = new Person()
console.log(amigo.apellido)

</script>

<template>
    <h1>Clases</h1>
</template>