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
            name: 'contacto',
            label: 'Contacto',
            type: 'array',
            maxRows: 1,
            fields:[
                    {
                        name: 'correo_inst',
                        label: 'Correo Institucional',
                        type: 'text',
                    },
                    {
                        name: 'cubiculo',
                        label: 'Cubiculo',
                        type: 'text',
                    },
                    {
                        name: 'linkedin',
                        label: 'Linkedin',
                        type: 'text',
                    },
                    {
                        name: 'github',
                        label: 'Github',
                        type: 'text',
                    },
                    {
                        name: 'pagina_web',
                        label: 'Pagina Web',
                        type: 'text',
                    },
                ],

        },
        {
            name: 'formacion_academica',
            label: 'Formacion Academica',
            type: 'array',
            fields:[
                {
                    name: 'nombre_institucion',
                    label: 'Nombre Universidad/Institucion',
                    type: 'text',
                    required: true,
                },
                {
                    name : 'certificacion',
                    label: 'Titulo o Certificacion obtenida',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'fecha_obtencion',
                    label: 'Fecha de obtencion',
                    type: 'text',
                    required: true,
                }
            ],
            required: false,
        },
        {
            name: 'experiencia_laboral',
            label: 'Experiencia Laboral',
            type: 'array',
            fields:[
                {
                    name: 'nombre_empresa',
                    label: 'Nombre Empresa',
                    type: 'text',
                    required: true,
                },
                {
                    name : 'descripcion_exp',
                    label: 'Descripcion Experiencia Laboral',
                    type: 'textarea',
                    required: true,
                },
            ],
            required: false,
        },
        {
            name: 'proyectos',
            label: 'Proyectos',
            type: 'array',
            fields:[
                {
                    name: 'nombre_proyecto',
                    label: 'Nombre Proyecto',
                    type: 'text',
                    required: true,
                },
                {
                    name : 'descripcion_proyecto',
                    label: 'Descripcion Proyecto',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'imagen_proyecto',
                    label: 'Imagen Proyecto',
                    type: 'upload',
                    relationTo: 'media',
                }
            ],
            required: false,
        },
        {
            name: 'investigaciones',
            label: 'Investigaciones',
            type: 'array',
            fields:[
                {
                    name: 'nombre_inv',
                    label: 'Nombre Investigacion',
                    type: 'text',
                    required: true,
                },
                {
                    name : 'descripcion_inv',
                    label: 'Descripcion Investigacion',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'imagen_inv',
                    label: 'Imagen Investigacion',
                    type: 'upload',
                    relationTo: 'media',
                }
            ],
            required: false,
        }

    ],
};

export default Maestros;
