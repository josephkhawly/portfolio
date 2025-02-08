import { getPayload } from 'payload'
import React from 'react'

import config from '@payload-config'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import { graphcms } from '@/utils/graphcms'
import { gql } from 'graphql-request'

const queryProjects = gql`
  {
    author(where: { slug: "joseph-khawly" }) {
      name
      intro
    }
  }
`

export default async function HomePage() {
  const { author } = await graphcms.request(queryProjects)

  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    pagination: false,
    select: {
      title: true,
      slug: true,
      image: true,
    },
  })

  return (
    <>
      <Hero author={author} />
      <Work projects={projects.docs} />
    </>
  )
}
