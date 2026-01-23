<script lang="ts" setup>


// class Persona {
//     private name: string;
//     apellido: string;
//     public edad: number;
//     static equipo: string = "pumas"

//     constructor(nombre: string, apellido: string, edad:number){
//         this.name = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }

// }


class Persona {
    static equipo: string;


    constructor(private name: string, public apellido: string, public edad:number, team: string = "pumas"){
        Persona.equipo = team
    }
    
}


// instanciamos la clase persona con la palabra reservada new
const caja: Persona = new Persona("manu","rejon",31);
console.log(caja)
console.log(Persona.equipo)


// console.log(Persona.equipo)

</script>

<template>
    hola
</template>