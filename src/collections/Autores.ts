import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

export const Autores: CollectionConfig = {
    slug: 'autores',
    admin: {
        useAsTitle: 'nombre',
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
            name: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true,
        }
      ]
}
export default Autores;