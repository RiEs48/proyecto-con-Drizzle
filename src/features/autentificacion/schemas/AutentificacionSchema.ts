import { z } from "zod"

export const BaseAutentificacionSchema = z.object({

    name: z.string().trim().min(1, { error: 'EL Nombre es Obligatorio' }),
    email: z.email({ error: 'el Correo no Es Valido' }),
    password: z.string().trim().min(8, { error: 'La Constraseña Debe ser Minimo 8 Caractareres' }),
    passwordConfirmation: z.string().trim().min(1, { error: 'La Contraseña de Confirmacion no Puede Ir Vacia' })

})

export const RegistrarseSchema = BaseAutentificacionSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
    //aqui podemos comprobar que la contraseña sea igual que la confiramcion
}).refine((data) => data.password === data.passwordConfirmation, {
    error: 'Los Passwords No Son Iguales',
    path: ['passwordConfirmation']
})
export type RegistroEntradas = z.infer<typeof RegistrarseSchema>