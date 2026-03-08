
import OlvidasteTuContraseña from '@/src/features/autentificacion/componentes/OlvidasteTuContraseña'
import Heading from '@/src/shared/componentes/typografia/Heading'
import { Metadata } from 'next'
import Link from 'next/link'



export const metadata: Metadata = {
    title: "Olvidaste Contraseña"
}
export default function page() {


    return (
        <>
            <Heading>Recupera Tu Contraseña</Heading>
            <OlvidasteTuContraseña />
            <nav className="mt-20 flex justify-between">
                <Link href={'/autentificacion/login'}
                    className="font-bold">Iniciar Sesion
                </Link>
                <Link href={'/autentificacion/crear-cuenta'}
                    className="font-bold">Registrarse
                </Link>

            </nav>
        </>
    )
}
