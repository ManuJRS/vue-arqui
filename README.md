Infra (Axios class): normaliza respuesta a { data, errors, warnings }

Repo: define endpoint + convierte DTO → Model + Success/Failure

Composable: isLoading, error, orquestación

Pinia: estado central (producto actual)

UI: solo renderiza y dispara acciones

src/
modules/shared/infrastructure/DummyJsonApi.ts (cliente HTTP Axios)
domain/products/repositories/ProductRepository.ts (repo de dominio)
composables/useProduct.ts (composable)
stores/productStore.ts (Pinia)
views/ProductSearch.vue (UI)

Con la persistencia activada

UI
↓
Composable (fetchProductById)
↓
Repository (DTO → Model)
↓
Pinia Store
↓
localStorage ←── persist

y luego al recargar

localStorage
↓
Pinia Store (rehidrata state)
↓
UI
