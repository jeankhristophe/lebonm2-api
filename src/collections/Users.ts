import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'role'],
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'Prénom',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Nom',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Téléphone',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Administrateur', value: 'admin' },
        { label: 'Agence', value: 'agency' },
        { label: 'Agent', value: 'agent' },
        { label: 'Particulier', value: 'user' },
      ],
    },
    {
      name: 'agency',
      type: 'relationship',
      relationTo: 'agencies',
      label: 'Agence',
      admin: {
        condition: (data) => ['agency', 'agent'].includes(data?.role),
      },
    },
    {
      name: 'twoFactorEnabled',
      type: 'checkbox',
      defaultValue: false,
      label: '2FA activé',
    },
    {
      name: 'favorites',
      type: 'relationship',
      relationTo: 'properties',
      hasMany: true,
      label: 'Favoris',
    },
  ],
}
