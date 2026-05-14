"use client";

import {
  Form,
  FormBtnSubmit,
  FormInput,
  FormTitulos,
} from "@/componentes/forms";

export default function LoginForm() {
  return (
    <Form>
      <FormTitulos htmlFor="email">Email</FormTitulos>

      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu Correo"
        className=""
      />
      <FormTitulos htmlFor="password">Contraseña</FormTitulos>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu Contraseña"
      />
      <FormBtnSubmit value="Iniciar Sesion" />
    </Form>
  );
}
