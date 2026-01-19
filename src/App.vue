<script lang="ts" setup>
import ProductSearch from './views/ProductSearch.vue'
import Destructuring from './views/Destructuring.vue'
import ClasesPractice from './views/ClasesPractice.vue'
import ClasesRepaso from './views/ClasesRepaso.vue'
import TempControl from './views/TempControl.vue'
import ChildButton from './components/ChildButton.vue'

const onChildClick = (message: string) => {
  console.log('Evento recibido', message)
}

const clickBtnSec = (message:string) => {
  console.log('segundo mensaje', message)
}

type RoomsApi = {
  id: number
  name: string
  guests: number
  nights: number
  pricePerNight: number
  isAvailable: boolean
}

type TransformDto = {
  value: number
  label: string
  totalPrice: number
  canBook: boolean
  isLongStay: boolean
}

const roomsApi: RoomsApi[] = [
  {
    id: 101,
    name: 'Deluxe Room',
    guests: 2,
    pricePerNight: 3200,
    nights: 3,
    isAvailable: true,
  },
  {
    id: 102,
    name: 'Junior Suite',
    guests: 4,
    pricePerNight: 4500,
    nights: 2,
    isAvailable: false,
  },
  {
    id: 103,
    name: 'Standard Room',
    guests: 2,
    pricePerNight: 1800,
    nights: 5,
    isAvailable: true,
  },
]

const getPaxes = (name: string, guests: number): string => {
  return `${name} (${guests} pax)`
}

const getTotalPrice = (pricePerNight: number, nights: number): number => {
  return pricePerNight * nights
}

const getIsAvailable = (isAvailable: boolean): boolean => {
  return isAvailable === true ? true : false
}

const getStay = (nights: number): boolean => {
  return nights >= 3 ? true : false
}

console.log(getPaxes(roomsApi[0]?.name ?? '', roomsApi[0]?.guests ?? 0))
console.log(getTotalPrice(roomsApi[0]?.pricePerNight ?? 0, roomsApi[0]?.nights ?? 0))
console.log(getIsAvailable(roomsApi[0]?.isAvailable ?? false))
console.log(getStay(roomsApi[0]?.nights ?? 0))

const transformDto: TransformDto[] = roomsApi.map((index) => ({
  value: index.id,
  label: getPaxes(index.name, index.guests),
  totalPrice: getTotalPrice(index.pricePerNight, index.nights),
  canBook: getIsAvailable(index.isAvailable),§
  isLongStay: getStay(index.nights),
}))

transformDto.forEach((room) => {
  if (room.canBook) {
    console.log(`Room available: ${room.label}`)
  }
})

import ArrayMetods from './views/ArrayMetods.vue'
</script>

<template>
  <ArrayMetods />
  <ProductSearch />
  <Destructuring />
  <ClasesPractice />
  <ClasesRepaso />
  <TempControl />
  <ChildButton @clicked="onChildClick"/>
</template>
