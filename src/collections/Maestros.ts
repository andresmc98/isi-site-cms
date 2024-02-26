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
  fields: [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      required: true,
    },
    {
      name: "foto",
      label: "Foto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "descripcion",
      label: "Descripción",
      type: "textarea",
      required: true,
    },
    {
      name: "tipo",
      label: "Tipo Maestro",
      type: "select",
      index: true,
      required: true,
      options: [
        { label: "Tronco Comun", value: "tronco-comun" },
        { label: "Tronco Ingenieria", value: "tronco-ing" },
        { label: "Ingenieria en Sistemas", value: "sistemas" },
      ],
    },
    {
      name: "contacto",
      label: "Contacto",
      type: "array",
      maxRows: 1,
      fields: [
        {
          name: "correo_inst",
          label: "Correo Institucional",
          type: "text",
        },
        {
          name: "cubiculo",
          label: "Cubiculo",
          type: "text",
        },
      ],
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
      name: "formacion_academica",
      label: "Formacion Academica",
      type: "array",
      fields: [
        {
          name: "nombre_institucion",
          label: "Nombre Universidad/Institucion",
          type: "text",
          required: true,
        },
        {
          name: "certificacion",
          label: "Titulo o Certificacion obtenida",
          type: "text",
          required: true,
        },
        {
          name: "fecha_obtencion",
          label: "Fecha de obtencion",
          type: "text",
          required: true,
        },
      ],
      required: false,
    },
    {
      name: "experiencia_laboral",
      label: "Experiencia Laboral",
      type: "array",
      fields: [
        {
          name: "nombre_empresa",
          label: "Nombre Empresa",
          type: "text",
          required: true,
        },
        {
          name: "descripcion_exp",
          label: "Descripcion Experiencia Laboral",
          type: "textarea",
          required: true,
        },
      ],
      required: false,
    },
    {
      name: "proyectos",
      label: "Proyectos",
      type: "array",
      fields: [
        {
          name: "nombre_proyecto",
          label: "Nombre Proyecto",
          type: "text",
          required: true,
        },
        {
          name: "descripcion_proyecto",
          label: "Descripcion Proyecto",
          type: "textarea",
          required: true,
        },
        {
          name: "imagen_proyecto",
          label: "Imagen Proyecto",
          type: "upload",
          relationTo: "media",
        },
      ],
      required: false,
    },
    {
      name: "investigaciones",
      label: "Investigaciones",
      type: "array",
      fields: [
        {
          name: "nombre_inv",
          label: "Nombre Investigacion",
          type: "text",
          required: true,
        },
        {
          name: "descripcion_inv",
          label: "Descripcion Investigacion",
          type: "textarea",
          required: true,
        },
        {
          name: "imagen_inv",
          label: "Imagen Investigacion",
          type: "upload",
          relationTo: "media",
        },
      ],
      required: false,
    },
  ],
  endpoints: [
    {
      // Regresar maestros por tipo
      path: "/tipo/:tipo",
      method: "get",
      handler: async (req, res, next) => {
        const { tipo } = req.params;
        const maestros = await req.payload.find({
          collection: "maestros",
          depth: 1,
          where: {
            tipo: {
              equals: tipo,
            },
          },
        });
        if (maestros.docs.length > 0) {
          res.status(200).send(maestros.docs[0]);
        } else {
          res.status(404).json({ message: "No se encontraron maestros" });
        }
      },
    },
  ],
};

export default Maestros;
