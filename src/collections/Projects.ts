import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'demo',
      label: 'Demo link',
      type: 'text',
    },
    {
      name: 'github',
      label: 'Github link',
      type: 'text',
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'value',
          label: 'Tag',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  timestamps: true,
}
