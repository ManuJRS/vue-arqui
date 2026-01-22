// src/services/user.service.ts

import { httpGet } from './http'
import type { UserDto } from '@/domain/user.dto'

/**
 * Obtiene un usuario por id desde la API
 */
export async function getUser(id: number): Promise<UserDto> {
  return httpGet<UserDto>(`https://dummyjson.com/users/${id}`)
}

/**
 * Obtiene una lista de usuarios (ejemplo extra)
 */
export async function getUsers(): Promise<UserDto[]> {
  const response = await httpGet<{ users: UserDto[] }>('https://dummyjson.com/users')

  return response.users
}
