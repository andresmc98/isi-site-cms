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
        create: isAdminOrEditor,
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
            type: "number",
            required: false,
        },
        {
            name: "eje",
            label: "Eje",
            type: "select",
            options: [
                {label: "Eje Básico", value: "Eje Básico"},
                {label: "Eje Especializante", value: "Eje Especializante"},
                {label: "Eje Formacion Comun", value: "Eje Formacion Comun"},
                {label: "Eje Integrador", value: "Eje Integrador"},
                {label: "Eje Profesionalizante", value: "Eje Profesionalizante"},
            ],
        },
        {
            name: "horas",
            label: "Horas",
            type: "number",
            min: 1,
            max: 5,
            required: false,
        },
        {
            name: "requisitos",
            label: "Requisitos",
            type: "richText",
            required: false,
        },
        {
            name: "seriada",
            label: "Seriada",
            type: "checkbox",
            required: false,
        },
        {
            name: "semestre",
            label: "Semestre",
            type: "select",
            options:[
                {label: "1er", value: "1er"},
                {label: "2do", value: "2do"},
                {label: "3er", value: "3er"},
                {label: "4to", value: "4to"},
                {label: "5to", value: "5to"},
                {label: "6to", value: "6to"},
                {label: "7mo", value: "7mo"},
                {label: "8vo", value: "8vo"},
                {label: "9no", value: "9no"},
            ],
            required: false,
        },
        {
            name: 'link_temario',
            label: 'Link Temario',
            type: 'text',
        }
    ],
};

export default Materias;