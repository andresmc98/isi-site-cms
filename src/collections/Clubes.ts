import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Clubes: CollectionConfig = {
    slug: "clubes",

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
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: "descripcion",
            label: "Descripción",
            type: "textarea",
            required: true,
        },
    ],
};

export default Clubes;