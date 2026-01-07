import { defineStore } from 'pinia'
import type { ProductModel } from '@/domain/products/repositories/ProductRepository'

export const useProductStore = defineStore('product', {
  state: () => ({
    current: null as ProductModel | null,
  }),

  actions: {
    setCurrent(product: ProductModel | null) {
      this.current = product
    },
    clear() {
      this.current = null
    },
  },

  // Esto activa la pesrsistencia de pinia
  persist: {
    key: 'productStore',
    storage: localStorage,
  },
})
