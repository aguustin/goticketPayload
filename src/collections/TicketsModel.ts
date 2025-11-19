// src/collections/TicketsModel.ts
import { CollectionConfig } from "payload";

export const TicketsModel: CollectionConfig = {
  slug: "ticketsModel",
  admin: { useAsTitle: "nombreEvento" },
  fields: [
    // OCULTOS -------------------
    { name: "identificadorEventos", type: "text", admin: { hidden: true } },
    { name: "userId", type: "text", admin: { hidden: true } },
    { name: "tipoMoneda", type: "text", admin: { hidden: true } },
    { name: "tipoEvento", type: "number", admin: { hidden: true } },
    { name: "eventoEdad", type: "number", admin: { hidden: true } },
    { name: "consumoDeCarta", type: "text", admin: { hidden: true } },
    { name: "nombreEvento", type: "text", admin: { hidden: true } },
    { name: "montoVentas", type: "number", admin: { hidden: true } },
    { name: "porcentajeRRPP", type: "number", admin: { hidden: true } },
    { name: "efectivo", type: "number", admin: { hidden: true } },
    { name: "linkEvento", type: "text", admin: { hidden: true } },

    {
      name: "categorias",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "nombreCategoria", type: "text" },
        { name: "vendidos", type: "number" },
        { name: "devoluciones", type: "number" },
        { name: "cortesías", type: "number" },
        { name: "valorUnidad", type: "number" },
        { name: "montoVendido", type: "number" },
        { name: "montoDevoluciones", type: "number" },
        { name: "montoDescuento", type: "number" },
        { name: "montoTotal", type: "number" },
      ],
    },

    { name: "artistas", type: "text", admin: { hidden: true } },
    { name: "descripcionEvento", type: "textarea", admin: { hidden: true } },
    { name: "aviso", type: "textarea", admin: { hidden: true } },

    {
      name: "categoriasEventos",
      type: "array",
      admin: { hidden: true },
      fields: [{ name: "value", type: "text" }],
    },

    { name: "fechaInicio", type: "date", admin: { hidden: true } },
    { name: "fechaFin", type: "date", admin: { hidden: true } },
    { name: "provincia", type: "text", admin: { hidden: true } },
    { name: "localidad", type: "text", admin: { hidden: true } },
    { name: "direccion", type: "text", admin: { hidden: true } },
    { name: "lugarEvento", type: "text", admin: { hidden: true } },
    { name: "imgEvento", type: "text", admin: { hidden: true } },
    { name: "bannerEvento", type: "text", admin: { hidden: true } },
    { name: "imagenDescriptiva", type: "text", admin: { hidden: true } },
    { name: "linkVideo", type: "text", admin: { hidden: true } },

    {
      name: "eventosRelacionados",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "idEvento", type: "text" },
      ],
    },

    {
      name: "tickets",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "nombreTicket", type: "text" },
        { name: "descripcionTicket", type: "textarea" },
        { name: "precio", type: "number" },
        { name: "cantidad", type: "number" },
        { name: "ventas", type: "number" },
        { name: "fechaDeCierre", type: "date" },
        { name: "visibilidad", type: "text" },
        { name: "estado", type: "number" },
        { name: "imgTicket", type: "text" },
        { name: "limit", type: "number" },
      ],
    },

    {
      name: "cortesiaRRPP",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "nombreTicket", type: "text" },
        { name: "descripcionTicket", type: "textarea" },
        { name: "cantidadDeCortesias", type: "number" },
        { name: "entregados", type: "number" },
        { name: "fechaDeCierre", type: "date" },
        { name: "visibilidad", type: "text" },
        { name: "estado", type: "number" },
        { name: "imgTicket", type: "text" },
        { name: "distribution", type: "number" },
        { name: "email", type: "email" },
        { name: "limit", type: "number" },
      ],
    },

    {
      name: "rrpp",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "nombre", type: "text" },
        { name: "mail", type: "email" },
        { name: "mailEncriptado", type: "text" },
        { name: "mailHash", type: "text" },
        { name: "linkDePago", type: "text" },

        {
          name: "ventasRRPP",
          type: "array",
          fields: [
            { name: "ticketId", type: "text" },
            { name: "nombreCategoria", type: "text" },
            { name: "vendidos", type: "number" },
            { name: "total", type: "number" },
          ],
        },

        {
          name: "ticketsCortesias",
          type: "array",
          fields: [
            { name: "ticketIdCortesia", type: "text" },
            { name: "cantidadDeCortesias", type: "number" },
          ],
        },

        { name: "montoCorrespondienteRRPP", type: "number" },
        { name: "montoTotalVendidoRRPP", type: "number" },
      ],
    },
  ],
};

export default TicketsModel;
