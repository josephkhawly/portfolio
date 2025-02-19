import { Img } from '@/components/Img'
import { marked } from 'marked'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import { getProjectBySlug } from '@/utils/getProjects'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LuArrowLeft, LuExternalLink, LuGithub } from 'react-icons/lu'
import { Card } from '@/components/ui/card'

export const revalidate = 600

export const dynamicParams = true

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

  if (!project) {
    notFound()
  }

  return (
    <div className='container mx-auto px-4 py-8 sm:py-12'>
      <div className='max-w-4xl mx-auto space-y-6 sm:space-y-8'>
        <Button asChild variant='ghost' size='sm'>
          <Link href='/projects' className='flex items-center space-x-2'>
            <LuArrowLeft className='h-4 w-4' />
            <span>Back to Projects</span>
          </Link>
        </Button>

        <div className='space-y-4'>
          <h1 className='text-3xl sm:text-4xl font-bold'>{project.title}</h1>
          <div className='relative w-full h-48 sm:h-80 rounded-lg overflow-hidden'>
            <Img image={project.image as Media} />
          </div>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm'
            >
              {tag.value}
            </span>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          {project.github && (
            <Button asChild variant='outline' className='w-full sm:w-auto'>
              <Link href={project.github} target='_blank'>
                <LuGithub className='mr-2 h-4 w-4' />
                View on GitHub
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button asChild className='w-full sm:w-auto'>
              <Link href={project.demo} target='_blank'>
                <LuExternalLink className='mr-2 h-4 w-4' />
                Live Demo
              </Link>
            </Button>
          )}
        </div>

        <Card className='p-4 sm:p-6'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Overview</h2>
          <p className='text-gray-500 dark:text-gray-400'>{marked(project.description)}</p>
        </Card>
      </div>
    </div>
  )
}
