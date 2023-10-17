import { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
    depth: 0,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
     // Only admins can create users
     create: isAdmin,
     // Admins can read all, but any other logged in user can only read themselves
     read: isAdminOrSelf,
     // Admins can update all, but any other logged in user can only update themselves
     update: isAdminOrSelf,
     // Only admins can delete
     delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'Nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'Apellido',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Usuario',
          value: 'user',
        }
      ]
    },
  ],
}

export default Users
