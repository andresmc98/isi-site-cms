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
        create: isAdmin,
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
            type: 'textarea',
            required: true,
        },
        {
            name: 'categoria',
            label: 'Categoría',
            type: 'select',
            options: [
                { label: 'Ceneval', value: 'Ceneval' },
                { label: 'Clubes', value: 'Clubes' },
                { label: 'Estudiantes', value: 'Estudiantes' },
                { label: 'General', value: 'General' },
                { label: 'Maestros', value: 'Maestros' },
                { label: 'Materias', value: 'Materias' },
                { label: 'Practicas Profesionales', value: 'Practicas Profesionales' },
                { label: 'Servicio Social', value: 'Servicio Social' },
            ],
        }
    ],
};

export default Faqs;