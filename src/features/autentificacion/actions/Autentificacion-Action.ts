"use server"

import { RegistrarseSchema, RegistroEntradas } from "../schemas/AutentificacionSchema";
import { autentificacionService } from "../services/AutentificacionServicio";


export async function RegistrarseAction(input: RegistroEntradas) {
    const data = RegistrarseSchema.safeParse(input)
    if (!data.success) {
        return {
            error: 'Hubo un Error',
            success: ''
        }

    }
    // llamamos el metodo creado en el Servicio
    await autentificacionService.registro(data.data)


}