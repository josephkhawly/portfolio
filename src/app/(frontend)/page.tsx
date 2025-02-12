import { getPayload } from 'payload'
import React from 'react'

import config from '@payload-config'
import Work from '@/components/Work'
import { getCachedGlobal } from '@/utils/getGlobals'

export default async function HomePage() {
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

  const { name, intro } = await getCachedGlobal('hero')()

  return (
    <>
      <div className='hero h-96 bg-primary text-primary-content'>
        <div className='text-center hero-content flex-col-reverse md:flex-row'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold'>I'm {name}</h1>
            <p className='py-4'>{intro}</p>
          </div>
        </div>
      </div>
      <Work projects={projects.docs} />
    </>
  )
}
