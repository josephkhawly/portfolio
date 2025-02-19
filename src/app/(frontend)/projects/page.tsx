import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LuGithub } from 'react-icons/lu'
import Link from 'next/link'
import { getAllProjects } from '@/utils/getProjects'
import { Img } from '@/components/Img'
import { Media } from '@/payload-types'

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return (
    <div className='container mx-auto px-4 py-8 sm:py-12'>
      <div className='max-w-4xl mx-auto space-y-6 sm:space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Projects</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className='grid gap-6 sm:gap-8'>
          {projects.map((project, index) => (
            <Card key={index} className='overflow-hidden flex flex-col sm:flex-row'>
              <div className='relative h-48 sm:h-auto sm:w-1/3'>
                <Img image={project.image as Media} />
              </div>
              <div className='p-4 sm:p-6 flex-1'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-2'>{project.title}</h2>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm'
                    >
                      {tag.value}
                    </span>
                  ))}
                </div>
                <div className='flex flex-col sm:flex-row gap-3'>
                  {project.github && (
                    <Button asChild variant='outline' size='sm' className='w-full sm:w-auto'>
                      <Link href={project.github} target='_blank'>
                        <LuGithub className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  <Button asChild size='sm' className='w-full sm:w-auto'>
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
