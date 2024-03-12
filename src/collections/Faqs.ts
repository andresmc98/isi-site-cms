import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const Faqs: CollectionConfig = {
    slug: 'faqs',
    admin: {
        useAsTitle: 'pregunta',
    },
    access: {
        // Only admins can create
        create: isAdminOrEditor,
        // Everyone can read
        read: () => true,
        // Only admins and editors can update
        update: isAdminOrEditor,
        // Only admins can delete
        delete: isAdmin,
    },
    fields: [
        {
            name: 'pregunta',
            label: 'Pregunta',
            type: 'text',
            required: true,
        },
        {
            name: 'respuesta',
            label: 'Respuesta',
            type: 'richText',
            required: true,
        },
        {
            name: 'categoria',
            label: 'Categoría',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
};

export default Faqs;