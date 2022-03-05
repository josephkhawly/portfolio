import { gql } from "graphql-request";
import { json, LoaderFunction, useLoaderData } from "remix";
import { graphcms } from "~/utils/graphcms";
import { Img } from "~/components/Img";
import { marked } from "marked";

const queryProject = gql`
    query Project($slug: String!) {
      project(where: {slug: $slug}) {
        name
        slug
        description
        demo
        tags
        image {
          handle
          width
          height
        }
      }
    }
`

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params
    const { project } = await graphcms.request(queryProject, { slug })
    return json({ project })
}

export default function ProjectSlug() {
    let { project } = useLoaderData()
    return (
        <div className="block-container grid lg:grid-cols-2 gap-10">
            <div>
                <div className="border mockup-window bg-base-300 shadow-xl">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel='noopener noreferrer'
                        className="absolute top-4 right-5 font-mono link link-hover text-sm"
                    >
                        {project.demo.replace(/^https?:\/\//, '')}
                    </a>
                    <Img image={project.image[0]} />
                </div>
            </div>
            <div>
                <div className="mb-5">
                    <h2 className="secondary-title mb-2">{project.name}</h2>
                    {project.tags.map((tag: string) => <span key={tag} className="badge badge-primary mr-3">{tag}</span>)}
                </div>
                <div className="prose" dangerouslySetInnerHTML={{ __html: marked(project.description) }} />
            </div>
        </div>
    )
}