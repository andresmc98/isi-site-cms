import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'tag',
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
            name: 'tag',
            label: 'Tag',
            type: 'text',
            required: true,
        },
        {
            name: 'descripcion',
            label: 'Descripción',
            type: 'text',
            required: true,
        }
      ]
}

export default Tags;