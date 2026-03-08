
import LoginForm from "@/src/features/autentificacion/componentes/LoginForm";
import Heading from "@/src/shared/componentes/typografia/Heading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Iniciar Sesión"
}

export default function LoginPage() {
    return (
        <>
            <Heading>Iniciar Sesion</Heading>
            <LoginForm />

            <nav className="mt-20 flex justify-between">
                <Link href={'/autentificacion/crear-cuenta'}
                    className="font-bold">Crear Cuenta
                </Link>
                <Link href={'/autentificacion/Olvidaste'}
                    className="font-bold">Olvide Mi Contraseña
                </Link>

            </nav>
        </>
    )
}