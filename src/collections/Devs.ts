import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Devs : CollectionConfig = {
    slug: "devs",

    admin: {
        useAsTitle: "nombre",
    },
    access: {
    //Only admins can create
    create: isAdmin,
    //Everyone can read
    read: () => true,
    //Only admins and editors can update
    update: isAdminOrEditor,
    //Only admins can delete
    delete: isAdmin,
    },
    fields:[
        {
            name: "nombre",
            label: "Nombre",
            type: "text",
            required: true,
        },
        {
            name: 'foto',
            label: 'Foto',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: "rol",
            label: "Rol",
            type: "text",
        },
        {
            name: "descripcion",
            label: "Descripción",
            type: "textarea",
            required: true,
        },
        {
            name: "redes_sociales",
            label: "Redes Sociales",
            type: "array",
            fields: [
              {
                name: "nombre_red",
                label: "Nombre Red Social",
                type: "text",
              },
              {
                name: "link_red",
                label: "Link Red Social",
                type: "text",
              },
            ],
          }
    ],
};

export default Devs;