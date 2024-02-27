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
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'text',
      required: true,
    },
    {
      name: 'autorPortal',
      label: 'Autor del Portal',
      type: 'text',
      required: true,
    },
    {
      name: 'activa',
      label: 'Activa',
      type: 'checkbox',
      defaultValue: true,

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
      name: 'contenido',
      label: 'Contenido',
      type: 'richText',
      required: true,
    },
  ],
};

export default Noticias;

