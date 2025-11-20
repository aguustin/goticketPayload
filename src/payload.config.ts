// src/payload.config.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import fetch from 'node-fetch'; // Asegúrate de tener node-fetch instalado

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { UserModel } from './collections/UserModel';
import { TicketsModel } from './collections/TicketsModel';
import dotenv from "dotenv"

dotenv.config()
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [Users, Media, UserModel, TicketsModel],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  plugins: [
    // Aquí podrías agregar más plugins
  ],
  // Hook onInit: se ejecuta al iniciar Payload
  onInit: async (payload) => {
   console.log(process.env.DATABASE_URI)
    try {
      const response = await fetch("https://gomarket-1-backend.onrender.com/getAllUsers");
      const users = await response.json();
      let importedCount = 0;

      for (const user of users) {
        const exists = await payload.find({
          collection: 'userModel',
          where: { mail: { equals: user.mail } },
        });

        if (exists.totalDocs === 0) {
          await payload.create({
            collection: 'userModel',
            data: {
              nombreCompleto: user.nombreCompleto,
              dni: user.dni,
              domicilio: user.domicilio,
              cuit: user.cuit,
              mail: user.mail,
              telefono: user.telefono,
              pais: user.pais,
              cbu: user.cbu,
              alias: user.alias,
              nombreTitular: user.nombreTitular,
              nombreProductora: user.nombreProductora,
              cbuProductora: user.cbuProductora,
              aliasProductora: user.aliasProductora,
              nombreTitularProductora: user.nombreTitularProductora,
              numeroCuenta: user.numeroCuenta,
              nombreBanco: user.nombreBanco,
              descuentoProductora: user.descuentoProductora,
              cortesias: user.cortesias || [],
              redes: user.redes || [],
              favorites: user.favorites || [],
              imagenProductora: user.imagenProductora || "",
              dniRepresentante: user.dniRepresentante || 0,
              domicilioProductora: user.domicilioProductora || "",
              mailProductora: user.mailProductora || "",
              cuitProductora: user.cuitProductora || 0,
              telefonoProductora: user.telefonoProductora || 0,
              paisProductora: user.paisProductora || "",
              razonSocial: user.razonSocial || "",
              contrasenia: user.contrasenia || "",
              codigoInternacional: user.codigoInternacional || "",
              rol: user.rol || 0,
              descuento: user.descuento || 0,
            },
          });
          importedCount++;
        }
      }

      const responseEvents = await fetch("https://gomarket-1-backend.onrender.com/getAllEvents");
      const events = await responseEvents.json();
      let importedCountEvents = 0;

      for(const event of events){
          const exists = await payload.find({
            collection: 'ticketsModel',
            where: { nombreEvento: { equals: event.nombreEvento } },
          });
          if (exists.totalDocs === 0) {
              await payload.create({
                collection: 'ticketsModel',
                data:{
                      soldOut: event.soldOut || false,
                      identificadorEventos: event.identificadorEventos || '',
                      userId: event.userId || '',
                      prodMail: event.prodMail || '', 
                      numeroEvento: event.numeroEvento || 0,
                      codigoPais: event.codigoPais || '',
                      codigoCiudad: event.codigoCiudad || '',
                      paisDestino: event.paisDestino || '',
                      tipoMoneda: event.tipoMoneda || '',
                      tipoEvento: event.tipoEvento || 0,
                      eventoEdad: event.eventoEdad || 0,
                      consumoDeCarta: event.consumoDeCarta || '',
                      nombreEvento: event.nombreEvento || '',
                      montoVentas: event.montoVentas || 0,
                      porcentajeRRPP: event.porcentajeRRPP || 0,
                      efectivo: event.efectivo || 0,
                      linkEvento: event.linkEvento || '',
                      categorias: [],
                      artistas: event.artistas || '',
                      descripcionEvento: event.descripcionEvento || '',
                      aviso: event.aviso || '',
                      categoriasEventos: [],
                      fechaInicio: event.fechaInicio || null,
                      fechaFin: event.fechaFin || null,
                      provincia: event.provincia || '',
                      localidad: event.localidad || '',
                      direccion: event.direccion || '',
                      lugarEvento: event.lugarEvento || '',
                      imgEvento: event.imgEvento || '',
                      bannerEvento: event.bannerEvento || '',
                      imagenDescriptiva: event.imagenDescriptiva || '',
                      linkVideo: event.linkVideo || '',
                      comisionServicio: event.comisionServicio || 0,
                      eventosRelacionados: [],
                      tickets: [],
                      cortesiaRRPP: [],
                      rrpp: [],
                      totalVentas: event.totalVentas || 0,
                      totalDevoluciones: event.totalDevoluciones || 0,
                      totalCortesias: event.totalCortesias || 0,
                      totalMontoVendido: event.totalMontoVendido || 0,
                      totalMontoDescuento: event.totalMontoDescuento || 0,
                      montoTotal: event.montoTotal || 0
                }
              })
              importedCountEvents++
          }
      }

      console.log(`Usuarios importados automáticamente: ${importedCount}`);
    } catch (err) {
      console.error('Error importando usuarios al iniciar Payload:', err);
    }
  },
});
