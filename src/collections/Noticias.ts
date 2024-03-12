import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const Noticias: CollectionConfig = {
  slug: 'noticias',

  admin: {
    useAsTitle: 'titulo',
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

  fields: [
    {
      name: 'titulo',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Imagen de Portada',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'pieDeFoto',
      label: 'Pie de Foto',
      type: 'text',
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'autor',
      label: 'Autor de Noticia',
      type: 'relationship',
      relationTo: 'autores',
      hasMany: true,
      required: true,
    },
    {
      name: 'fechaPublicacion',
      label: 'Fecha de Publicación',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly', // Mostrar solo el día en el selector
          displayFormat: 'd MMM yyy', // Formato de visualización personalizado
        },
      },
      required: true,
    },
    {
      name: 'resumen',
      label: 'Resumen',
      type: 'textarea',
    },
    {
      name: 'contenido',
      label: 'Contenido',
      type: 'richText',
      required: true,
    },
    {
      name: 'fuente',
      label: 'Fuente (link)',
      type: 'text',
    },
  ],
};

export default Noticias;

