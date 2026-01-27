import { Img } from '@/components/Img'
import { marked } from 'marked'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import { cache } from 'react'
import Link from 'next/link'

export const revalidate = 600

export const dynamicParams = true

const getProjectBySlug = cache(async ({ slug }: { slug: string }) => {
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

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return projects.docs.map((project) => ({
    params: {
      slug: project.slug,
    },
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const project = await getProjectBySlug({ slug })

  return {
    title: `${project.title} | Projects | Joseph Khawly`,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug({ slug })

  return (
    <div className='block-container grid lg:grid-cols-2 gap-10'>
      <div>
        <div className='mockup-browser border-base-300 border bg-base-300 shadow-xl'>
          <div className='mockup-browser-toolbar'>
            <div className='input'>
              <Link
                href={project.demo ?? ''}
                target='_blank'
                rel='noopener noreferrer'
                className='link link-hover'
              >
                {project.demo}
              </Link>
            </div>
          </div>
          <Img image={project.image as Media} />
        </div>
      </div>
      <div>
        <div className='mb-5'>
          <h2 className='secondary-title mb-2'>{project.title}</h2>
          {project.tags.map((tag) => (
            <span key={tag.id} className='badge badge-primary mr-3'>
              {tag.value}
            </span>
          ))}
        </div>
        <div className='prose' dangerouslySetInnerHTML={{ __html: marked(project.description) }} />
      </div>
    </div>
  )
}
