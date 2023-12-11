import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Maestros: CollectionConfig = {
    slug: "maestros",

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
            name: "descripcion",
            label: "Descripción",
            type: "textarea",
            required: true,
        },
        {
            name: "materias",
            label: "Materias",
            type: "text",
        },
        {
            name: "contacto",
            label: "Contacto",
            type: "textarea",
        },
        {
            name: "estudios",
            label: "Estudios",
            type: "text",
        }

    ],
};

export default Maestros;
