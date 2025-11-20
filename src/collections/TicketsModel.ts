// src/collections/TicketsModel.ts
import { CollectionConfig } from "payload";

export const TicketsModel: CollectionConfig = {
  slug: "ticketsModel",
  admin: { useAsTitle: "nombreEvento" },
  fields: [
    // OCULTOS -------------------
    { name: "identificadorEventos", type: "text" },
    { name: "userId", type: "text" },
    { name: "tipoMoneda", type: "text" },
    { name: "tipoEvento", type: "number" },
    { name: "eventoEdad", type: "number" },
    { name: "consumoDeCarta", type: "text" },
    { name: "nombreEvento", type: "text" },
    { name: "montoVentas", type: "number" },
    { name: "porcentajeRRPP", type: "number" },
    { name: "efectivo", type: "number" },
    { name: "linkEvento", type: "text" },

    {
      name: "categorias",
      type: "array",
      defaultValue: [],
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

    { name: "artistas", type: "text" },
    { name: "descripcionEvento", type: "textarea" },
    { name: "aviso", type: "textarea" },

    {
      name: "categoriasEventos",
      type: "array",
      defaultValue: [],
      fields: [{ name: "value", type: "text" }],
    },

    { name: "fechaInicio", type: "date" },
    { name: "fechaFin", type: "date" },
    { name: "provincia", type: "text" },
    { name: "localidad", type: "text" },
    { name: "direccion", type: "text" },
    { name: "lugarEvento", type: "text" },
    { name: "imgEvento", type: "text" },
    { name: "bannerEvento", type: "text" },
    { name: "imagenDescriptiva", type: "text" },
    { name: "linkVideo", type: "text" },
    { name: "comisionServicio", type: "number"},
    {
      name: "eventosRelacionados",
      type: "array",
      defaultValue: [],
      fields: [
        { name: "idEvento", type: "text" },
      ],
    },

    {
      name: "tickets",
      type: "array",
      defaultValue: [],
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
      defaultValue: [],
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
      defaultValue: [],
      fields: [
        { name: "nombre", type: "text" },
        { name: "mail", type: "email" },
        { name: "mailEncriptado", type: "text" },
        { name: "mailHash", type: "text" },
        { name: "linkDePago", type: "text" },

        {
          name: "ventasRRPP",
          type: "array",
          defaultValue: [],
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
          defaultValue: [],
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
