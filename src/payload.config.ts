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

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, UserModel, TicketsModel],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // Aquí podrías agregar más plugins
  ],
  // Hook onInit: se ejecuta al iniciar Payload
  onInit: async (payload) => {
    console.log('Payload iniciado: importando usuarios...');
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

      console.log(`Usuarios importados automáticamente: ${importedCount}`);
    } catch (err) {
      console.error('Error importando usuarios al iniciar Payload:', err);
    }
  },
});
