import { CollectionConfig } from 'payload'

export const Islands: CollectionConfig = {
  slug: 'islands',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom',
    },
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      label: 'Code département',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
