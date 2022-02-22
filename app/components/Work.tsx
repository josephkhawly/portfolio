import { useWindowSize } from 'react-use';

interface Project {
    name: string;
    slug: string;
    image: [{
        url: string;
    }];
}

function ProjectCard({ image, name }: { image: string, name: string }) {
    return (
        <div className="border mockup-window bg-base-300 lg:h-72">
            <p className="absolute top-3.5 right-4 font-mono">{name}</p>
            <img
                src={image}
                className="w-full h-full object-cover"
            />
        </div>
    )
}


export default function Work({ projects }: { projects: Project[] }) {
    const { width } = useWindowSize();
    return (
        <div className="block-container">
            <section className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map(project => (
                        <ProjectCard key={project.slug} name={project.name} image={project.image[0].url} />
                    ))}
                </div>
            </section>
        </div>
    )
}