import Link from 'next/link'
import { ImageType, Img } from './Img'

type Project = {
  name: string
  slug: string
  image: ImageType[]
}

type CardProps = {
  project: Project
}

function ProjectCard({ project }: CardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className='group border mockup-window bg-base-300'>
        <p className='absolute top-3.5 right-4 font-mono xl:opacity-0 group-hover:opacity-100 transition-opacity text-sm md:text-base'>
          {project.name}
        </p>
        <Img image={project.image[0]} />
      </div>
    </Link>
  )
}

export default function Work({ projects }: { projects: Project[] }) {
  return (
    <div className='block-container'>
      <section className='w-full'>
        <h2 className='secondary-title'>Projects I've worked on</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
