interface Project {
    name: string;
    slug: string;
    image: [{
        url: string;
    }];
}

function ProjectCard({ image, name, slug }: { image: string, name: string, slug: string }) {
    return (
        <div className="border mockup-window bg-base-300 h-36 lg:h-72">
            <p className="absolute top-3.5 right-4">{name}</p>
            <img
                src={image}
                className="w-full h-full object-cover"
            />
        </div>
    )
}


export default function Work({ projects }: { projects: Project[] }) {
    return (
        <div className="block-container">
            <section className="w-full">
                <h2 id="work" className="secondary-title">My work</h2>
                <p className="section-paragraph">I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map(project => (
                        <ProjectCard key={project.slug} name={project.name} image={project.image[0].url} />
                    ))}
                </div>
            </section>
        </div>
    )
}