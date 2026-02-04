import { CollectionConfig } from 'payload'

export const Alerts: CollectionConfig = {
  slug: 'alerts',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'user', 'frequency', 'active'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom de l\'alerte',
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Utilisateur',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
      admin: { position: 'sidebar' },
    },
    {
      name: 'frequency',
      type: 'select',
      defaultValue: 'daily',
      options: [
        { label: 'Quotidienne', value: 'daily' },
        { label: 'Hebdomadaire', value: 'weekly' },
      ],
      label: 'Fréquence',
    },
    {
      name: 'transactionTypes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Vente', value: 'sale' },
        { label: 'Location', value: 'rent' },
        { label: 'Saisonnière', value: 'seasonal' },
      ],
      label: 'Types de transaction',
    },
    {
      name: 'propertyTypes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Appartement', value: 'apartment' },
        { label: 'Maison', value: 'house' },
        { label: 'Villa', value: 'villa' },
        { label: 'Terrain', value: 'land' },
      ],
      label: 'Types de bien',
    },
    {
      name: 'islands',
      type: 'relationship',
      relationTo: 'islands',
      hasMany: true,
      label: 'Îles',
    },
    {
      name: 'priceMin',
      type: 'number',
      label: 'Prix min',
    },
    {
      name: 'priceMax',
      type: 'number',
      label: 'Prix max',
    },
    {
      name: 'lastSent',
      type: 'date',
      admin: { readOnly: true, position: 'sidebar' },
    },
  ],
}
