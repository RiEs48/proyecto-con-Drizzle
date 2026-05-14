"use client";
import {
  Form,
  FormBtnSubmit,
  FormError,
  FormInput,
  FormTitulos,
} from "@/src/shared/componentes/forms";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  RegistrarseSchema,
  RegistroEntradas,
} from "../schemas/AutentificacionSchema";
import { RegistrarseAction } from "../actions/Autentificacion-Action";

export default function RegistroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegistrarseSchema),
    mode: "all",
  });

  const onSubmit = async (data: RegistroEntradas) => {
    await RegistrarseAction(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitulos htmlFor="name">Nombre</FormTitulos>
      <FormInput
        id="name"
        placeholder="tu nombre aqui"
        type="text"
        {...register("name")}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormTitulos htmlFor="email">E-mail</FormTitulos>
      <FormInput
        id="email"
        placeholder="tu correo aqui"
        type="email"
        {...register("email")}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormTitulos htmlFor="password">Contraseña</FormTitulos>
      <FormInput
        id="password"
        placeholder="contraseña min 8 caracteres"
        type="password"
        {...register("password")}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormTitulos htmlFor="password-repeat">Repetir Contraseña</FormTitulos>
      <FormInput
        id="passwordConfirmation"
        placeholder="Repite tu Contraseña"
        type="password"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation && (
        <FormError>{errors.passwordConfirmation.message}</FormError>
      )}

      <FormBtnSubmit value="Registrarse" className="bg-purple-400" />
    </Form>
  );
}
