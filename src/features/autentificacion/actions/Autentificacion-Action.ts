"use server"

import { RegistrarseSchema, RegistroEntradas } from "../schemas/AutentificacionSchema";


export async function RegistrarseAction(input: RegistroEntradas) {
    const data = RegistrarseSchema.safeParse(input)
    if (!data.success) {
        return {
            error: 'Hubo un Error',
            success: ''
        }

    }
}