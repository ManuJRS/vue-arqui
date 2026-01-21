import type { UserDto } from "./user.dto";

export class UserModel {
    id: number
    name: string
    email: string
    isActive: boolean

    constructor(dto: Partial <UserDto> = {}) { // con partial puedo implementar valores por defecto
        this.id = dto.id ?? 0
        this.name = dto.name ?? "sin nombre"
        this.email = dto.email ?? "sin email"
        this.isActive = dto.isActive ?? false
    }

    get statusLabel(): string {
        return this.isActive ? "Activo" : "Inactivo" // con esto mantenemos la logica de todo apartado del template
    }

    get displayName(): string {
        return this.name || "Invitado"
    }

    get fullName(): string {
        return this.email
    }

    get maskedEmail(): string {
        const [name, domain] = this.email.split("@")
        if(!domain) return this.email
        const visible = name?.slice(0,2)
        return `${visible}***${domain}`
    }


}