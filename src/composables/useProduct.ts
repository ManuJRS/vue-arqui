import { ref } from 'vue'
import { Failure } from '@/domain/shared/Result'
import {
  ProductRepository,
  type ProductModel,
} from '@/domain/products/repositories/ProductRepository'

export const useProduct = () => {
  const isLoading = ref(false)
  const error = ref<string>('')

  const repo = new ProductRepository()

  const fetchProductById = async (id: number): Promise<ProductModel | null> => {
    error.value = ''
    try {
      isLoading.value = true

      const result = await repo.getById(id)

      if (Failure.check(result)) {
        error.value = result.error
        return null
      }

      return result.value
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, fetchProductById }
}
