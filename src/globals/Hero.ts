import { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'intro',
      type: 'textarea',
    },
  ],
}
