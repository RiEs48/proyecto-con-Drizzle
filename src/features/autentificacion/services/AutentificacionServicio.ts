// este Archivo Servicio es el QUE SE COMUNICA CON EL REPOSITORIO EL QUE LO ORQUESTA

import { RegistroEntradas } from "../schemas/AutentificacionSchema";

class AutentificacionServicio {
    // creando un metodo de registro asincrono lo enviamos a Registro form
    async registro(credenciales: RegistroEntradas) {

        // extramos los valores
        const { name, email, password } = credenciales

        // revisar si el usuario Existe
        // validacion del Negocio
        // manejar  el registro

    }

}
export const autentificacionService = new AutentificacionServicio()