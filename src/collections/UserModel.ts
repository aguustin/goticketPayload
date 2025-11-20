// src/collections/UserModel.ts
import { CollectionConfig } from "payload";

export const UserModel: CollectionConfig = {
  slug: "userModel",
  admin: { useAsTitle: "nombreCompleto" },
  fields: [
    { name: "imagenProductora", type: "text" },
    { name: "dniRepresentante", type: "number" },
    { name: "domicilioProductora", type: "text" },
    { name: "mailProductora", type: "email" },
    { name: "cuitProductora", type: "number" },
    { name: "telefonoProductora", type: "number" },
    { name: "paisProductora", type: "text" },
    { name: "razonSocial", type: "text" },
    { name: "contrasenia", type: "text" },
    { name: "codigoInternacional", type: "text" },
    { name: "rol", type: "number" },
    { name: "descuento", type: "number" },
    { name: "nombreCompleto", type: "text" },
    { name: "dni", type: "number" },
    { name: "domicilio", type: "text" },
    { name: "cuit", type: "number" },
    { name: "mail", type: "email" },
    { name: "telefono", type: "number" },
    { name: "pais", type: "text" },
    { name: "cbu", type: "number" },
    { name: "alias", type: "text" },
    { name: "nombreTitular", type: "text" },
    { name: "nombreProductora", type: "text" },
    { name: "cbuProductora", type: "number" },
    { name: "aliasProductora", type: "text" },
    { name: "nombreTitularProductora", type: "text" },
    { name: "numeroCuenta", type: "number" },
    { name: "nombreBanco", type: "text" },
    { name: "comisionServicio", type: "number" },
    {
      name: "cortesias",
      type: "array",
       defaultValue: [],
      fields: [
        { name: "cortesiaId", type: "text" },
        { name: "qty", type: "number" },
      ],
    },

    {
      name: "redes",
      type: "array",
       defaultValue: [],
      fields: [
        { name: "instagram", type: "text" },
        { name: "facebook", type: "text" },
        { name: "whatsapp", type: "number" },
      ],
    },

    {
      name: "favorites",
      type: "array",
       defaultValue: [],
      fields: [
        { name: "eventId", type: "text" },
      ],
    },
  ]
};

export default UserModel;
