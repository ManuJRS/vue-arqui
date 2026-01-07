<template>
  <section class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
      <h2 class="text-xl font-semibold text-slate-800 mb-4">Buscar producto</h2>

      <div class="flex flex-col sm:flex-row gap-3">
        <input v-model.number="productId" type="number" min="1" placeholder="ID del producto"
          class="w-full sm:flex-1 rounded-md border border-slate-300 px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

        <button @click="onSearch" :disabled="isLoading"
          class="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
          {{ isLoading ? 'Buscando...' : 'Buscar' }}
        </button>

        <button @click="store.clear()" :disabled="isLoading"
          class="inline-flex items-center justify-center rounded-md bg-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed">
          Limpiar
        </button>
      </div>

      <p v-if="error" class="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
        {{ error }}
      </p>

      <div v-if="store.current" class="mt-6 rounded-lg border border-slate-200 p-4 flex flex-col sm:flex-row gap-4">
        <div class="flex-shrink-0">
          <img :src="store.current.image" :alt="store.current.name" class="h-40 w-40 object-cover rounded-md border" />
        </div>

        <div class="flex-1">
          <h3 class="text-lg font-semibold text-slate-800">
            #{{ store.current.id }} — {{ store.current.name }}
          </h3>

          <p class="mt-1 text-sm text-slate-600">
            {{ store.current.description }}
          </p>

          <div class="mt-3 space-y-1 text-sm">
            <p>
              <span class="font-medium text-slate-700">Precio:</span>
              ${{ store.current.price }}
            </p>
            <p>
              <span class="font-medium text-slate-700">Categoría:</span>
              {{ store.current.category }}
            </p>
          </div>
        </div>
      </div>

      <p v-else class="mt-6 text-center text-sm text-slate-500">No hay producto cargado.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProduct } from '@/composables/useProduct'
import { useProductStore } from '@/stores/productStore'

const productId = ref(1)

const store = useProductStore()
const { isLoading, error, fetchProductById } = useProduct()

const onSearch = async () => {
  const product = await fetchProductById(productId.value)
  store.setCurrent(product)
}
</script>
