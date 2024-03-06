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
        {
            name: 'profesor_encargado',
            label: 'Profesor Encargado',
            type: 'text',
            required: true,
        },
        {
            name : 'lideres',
            label: 'Lideres',
            type: 'text',
            required: true,
        },
        {
            name: 'ubicacion',
            label: 'Ubicación',
            type: 'textarea',
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
          },
        {
            name: 'servicios',
            label: 'Servicios',
            type: 'array',
            fields:[
                {
                    name: 'nombre_servicio',
                    label: 'Nombre Servicio',
                    type: 'text',
                    required: true,
                },
                {
                    name : 'descripcion_servicio',
                    label: 'Descripcion Servicio',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'imagen_servicio',
                    label: 'Imagenes Servicio',
                    type: 'array',
                    fields: [
                        {
                            name: 'imagen_servicio',
                            label: 'Imagen Servicio',
                            type: 'upload',
                            relationTo: 'media',
                        }
                    ]
                }
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
                    label: 'Imagenes Proyecto',
                    type: 'array',
                    fields: [
                        {
                            name: 'imagen_proyecto',
                            label: 'Imagen Proyecto',
                            type: 'upload',
                            relationTo: 'media',
                        }
                    ]
                }
            ],
            required: false,
        }
    ],
};

export default Clubes;