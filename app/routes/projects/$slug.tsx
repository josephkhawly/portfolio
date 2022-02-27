import { gql } from "graphql-request";
import { json, LoaderFunction, useLoaderData } from "remix";
import { graphcms } from "~/utils/graphcms";
import { Img } from "~/components/Img";

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
                    <Img image={project.image[0]} />
                </div>
                <h2 className="secondary-title">{project.name}</h2>
                {project.tags.map((tag: string) => <span key={tag} className="badge badge-primary">{tag}</span>)}
            </div>
            <div>
                <div className="prose">
                    {project.description}
                </div>
            </div>
        </div>
    )
}