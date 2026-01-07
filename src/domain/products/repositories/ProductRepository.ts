import { DummyJsonApi } from '../../../modules/shared/infraestructure/DummyJsonApi'
import { Failure, Success, type Result } from '@/domain/shared/Result'

type ProductDto = {
  id: number
  title: string
  description: string
  price: number
  brand?: string
  category: string
  thumbnail: string
}

export type ProductModel = {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  brand?: string
}

export class ProductRepository {
  constructor(private api = new DummyJsonApi()) {}

  async getById(productId: number): Promise<Result<ProductModel>> {
    try {
      const response = await this.api.get<never, ProductDto>(`/products/${productId}`)

      if (!response.data) return Failure.create('Producto no encontrado (data null)')

      const dto = response.data

      // aqui pasamos de DTO a MODEL
      const model: ProductModel = {
        id: dto.id,
        name: dto.title,
        description: dto.description,
        price: dto.price,
        category: dto.category,
        image: dto.thumbnail,
        brand: dto.brand,
      }

      return Success.create(model)
    } catch (e) {
      return Failure.create('Fallo técnico consultando producto', e)
    }
  }
}
