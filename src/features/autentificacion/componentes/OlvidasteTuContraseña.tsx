"use cliente"

import { Form, FormBtnSubmit, FormInput, FormTitulos } from "@/src/shared/componentes/forms"

export default function OlvidasteTuContraseña() {
    return (
        <>
            <Form >
                <FormTitulos >Email</FormTitulos>

                <FormInput
                    type="email"
                    id="email"
                    placeholder="Ingresa tu Correo"
                    className=""

                />

                <FormBtnSubmit value="Recuperar Contraseña" className="bg-orange-500" />


            </Form>
        </>

    )
}
