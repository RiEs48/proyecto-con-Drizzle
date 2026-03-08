import RegistroForm from "@/src/features/autentificacion/componentes/RegistroForm";
import Heading from "@/src/shared/componentes/typografia/Heading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Crear Cuenta"
}

export default function RegistrasePage() {
    return (
        <>
            <Heading>Crear Cuenta</Heading>
            <RegistroForm />
            <nav className="mt-20 flex justify-between">
                <Link href={'/autentificacion/login'}
                    className="font-bold">Iniciar Sesion
                </Link>
                <Link href={'/autentificacion/Olvidaste'}
                    className="font-bold">Olvide Mi Contraseña
                </Link>

            </nav>
        </>
    )
}