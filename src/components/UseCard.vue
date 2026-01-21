<script setup lang="ts">
import { UserModel } from '@/domain/UserModel';
import type { UserDto } from '@/domain/user.dto';
import { ref } from 'vue';

const showFullEmail = ref(false)


const userDto: UserDto = {
    id: 1,
    name: "Manuel",
    email: "test@correo.com",
    isActive: true
}

const user = new UserModel(userDto)

</script>

<template>
    <h1>Esta es una card</h1>
    <p>ID: {{ user.id }}</p>
    <p>NAME: {{ user.displayName }}</p>
    <p>EMAIL: {{ showFullEmail ? user.fullName : user.maskedEmail }}</p>
    <button @click="showFullEmail = !showFullEmail" class=" border rounded px-2 hover:cursor-pointer my-4 ">
        {{ showFullEmail ? "Ocultar Email" : "Mostrar Email" }}
    </button>
    <p>ACTIVO: {{ user.statusLabel }}</p>
</template>