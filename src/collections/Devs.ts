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
            name: "Puesto",
            label: "Puesto",
            type: "text",
        },
        {
            name: "descripcion",
            label: "Descripción",
            type: "textarea",
            required: true,
        },
        {
            name: 'redes_sociales',
            label: 'Redes Sociales (Solo Links)',
            type: 'array',
            maxRows: 1,
            fields:[
                    {
                        name: 'link_insta',
                        label: 'Instagram',
                        type: 'text',
                    },
                    {
                        name: 'link_x',
                        label: 'X',
                        type: 'text',
                    },
                    {
                        name: 'github',
                        label: 'Github',
                        type: 'text',
                    },
                    {
                        name: 'linkedin',
                        label: 'Linkedin',
                        type: 'text',
                    },
                ],
            }
    ],
};

export default Devs;