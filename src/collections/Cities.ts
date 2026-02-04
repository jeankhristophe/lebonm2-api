import { CollectionConfig } from 'payload'

export const Cities: CollectionConfig = {
  slug: 'cities',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'postalCode', 'island'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'postalCode',
      type: 'text',
      required: true,
      label: 'Code postal',
    },
    {
      name: 'island',
      type: 'relationship',
      relationTo: 'islands',
      required: true,
      label: 'Île',
    },
  ],
}
