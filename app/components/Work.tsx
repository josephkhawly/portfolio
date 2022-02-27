import { useWindowSize } from 'react-use';
import { Link } from 'remix';
import { ImageType, Img } from './Img';

type Project = {
    name: string;
    slug: string;
    image: ImageType[];
}

type CardProps = {
    project: Project;
}

function ProjectCard({ project }: CardProps) {
    return (
        <Link prefetch='intent' to={`/projects/${project.slug}`}>
            <div className="group border mockup-window bg-base-300 lg:h-72 hover:bg-[#0025FF] cursor-pointer transition-colors shadow-xl">
                <p className="absolute top-3.5 right-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">{project.name}</p>
                <Img image={project.image[0]} />
            </div>
        </Link>
    )
}

function MobileProjectCard({ project }: CardProps) {
    return (
        <Link prefetch='intent' to={`/projects/${project.slug}`}>
            <div className="mockup-phone md:w-auto shadow-xl">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <Img image={project.image[0]} />
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default function Work({ projects }: { projects: Project[] }) {
    const { width } = useWindowSize();
    return (
        <div className="block-container">
            <section className="w-full">
                <h2 className="secondary-title">Projects I've worked on</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map(project => width > 768 ? <ProjectCard key={project.slug} project={project} /> : <MobileProjectCard key={project.slug} project={project} />)}
                </div>
            </section>
        </div>
    )
}