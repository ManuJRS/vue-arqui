import { defineStore } from "pinia"

export type RateModel = {
  code: string
  price: number
  currency: string
  refundable: boolean
}

export type RatesMeta = {
  hotel: string
  categoryId: number
  refundable: boolean
}

export const useBookingStore = defineStore("booking", {
  state: () => ({
    rates: [] as RateModel[],
    ratesMeta: null as RatesMeta | null
  }),
  getters: {
    hasRates: (s) => s.rates.length > 0
  },
  actions: {
    setRates(payload: { rates: RateModel[]; meta: RatesMeta }) {
      this.rates = payload.rates
      this.ratesMeta = payload.meta
    },
    clearRates() {
      this.rates = []
      this.ratesMeta = null
    }
  }
})
