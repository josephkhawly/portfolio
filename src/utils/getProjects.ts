import { getPayload } from 'payload'
import config from '@payload-config'
import { cache } from 'react'

export async function getAllProjects() {
  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    pagination: false,
    select: {
      title: true,
      slug: true,
      image: true,
      tags: true,
      github: true,
    },
  })

  return projects.docs
}

export const getProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'projects',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
