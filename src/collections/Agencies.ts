import { CollectionConfig } from 'payload'

export const Agencies: CollectionConfig = {
  slug: 'agencies',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'island', 'active', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom de l\'agence',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Adresse',
    },
    {
      name: 'city',
      type: 'relationship',
      relationTo: 'cities',
      label: 'Ville',
    },
    {
      name: 'island',
      type: 'relationship',
      relationTo: 'islands',
      label: 'Île',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Téléphone',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Site web',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: false,
      label: 'Abonnement actif',
      admin: {
        position: 'sidebar',
        description: 'Toggle Pennylane',
      },
    },
    {
      name: 'subscriptionPlan',
      type: 'select',
      options: [
        { label: 'Mensuel', value: 'monthly' },
        { label: 'Annuel', value: 'yearly' },
      ],
      label: 'Type abonnement',
    },
    {
      name: 'pennylaneId',
      type: 'text',
      label: 'ID Pennylane',
    },
    {
      name: 'ubiflowEnabled',
      type: 'checkbox',
      defaultValue: false,
      label: 'Import Ubiflow actif',
    },
    {
      name: 'ubiflowAdvertiserId',
      type: 'text',
      label: 'Code annonceur Ubiflow',
      admin: {
        condition: (data) => data?.ubiflowEnabled,
      },
    },
    {
      name: 'ubiflowLastSync',
      type: 'date',
      label: 'Dernière sync Ubiflow',
      admin: { readOnly: true },
    },
  ],
}
