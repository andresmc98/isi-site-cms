import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Materias: CollectionConfig = {
    slug: "materias",

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
            name: "descripcion",
            label: "Descripción",
            type: "textarea",
            required: true,
        },
        {
            name: "creditos",
            label: "Créditos",
            type: "text",
            required: false,
        },
        {
            name: "requisitos",
            label: "Requisitos",
            type: "textarea",
            required: false,
        },
        {
            name: "seriada",
            label: "Seriada",
            type: "text",
            required: false,
        },
        {
            name: "semestre",
            label: "Semestre",
            type: "text",
            required: false,
        },
        {
            name: "maestros",
            label: "Maestros",
            type: "text",
        }
    ],
};

export default Materias;