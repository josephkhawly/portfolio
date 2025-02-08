import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import { graphcms } from '@/utils/graphcms'
import { gql } from 'graphql-request'

const queryProjects = gql`
  {
    projects(orderBy: name_ASC) {
      name
      slug
      image {
        url
        width
        height
      }
    }

    author(where: { slug: "joseph-khawly" }) {
      name
      intro
    }
  }
`

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

   const { projects, author } = await graphcms.request(queryProjects)
   
   return (
     <>
       <Hero author={author} />
       <Work projects={projects} />
     </>
   )
}
