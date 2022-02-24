import { useWindowSize } from 'react-use';
import { Link } from 'remix';

interface Project {
    name: string;
    slug: string;
    image: [{
        url: string;
    }];
}

type CardProps = {
    image: string;
    name: string;
    slug: string;
}

function ProjectCard({ image, name, slug }: CardProps) {
    return (
        <Link prefetch='intent' to={`/projects/${slug}`} >
            <div className="group border mockup-window bg-base-300 lg:h-72 hover:bg-[#0025FF] cursor-pointer transition-colors shadow-xl">
                <p className="absolute top-3.5 right-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">{name}</p>
                <img src={image} className="w-full h-full object-cover" />
            </div>
        </Link>
    )
}

function MobileProjectCard({ image, name, slug }: CardProps) {
    return (
        <div className="mockup-phone md:w-auto shadow-xl">
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    <img src={image} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}


export default function Work({ projects }: { projects: Project[] }) {
    const { width } = useWindowSize();
    return (
        <div className="block-container">
            <section className="w-full">
                <h2 className="secondary-title">Projects I've worked on</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map(project => <ProjectCard key={project.slug} name={project.name} image={project.image[0].url} slug={project.slug} />)}
                </div>
            </section>
        </div>
    )
}