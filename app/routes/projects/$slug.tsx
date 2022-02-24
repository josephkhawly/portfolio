import { gql } from "graphql-request";
import { json, LoaderFunction, useLoaderData } from "remix";
import { graphcms } from "~/utils/graphcms";

const queryProject = gql`
    query Project($slug: String!) {
      project(where: {slug: $slug}) {
        name
        slug
        description
        demo
        image {
          url
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
    let data = useLoaderData()
    return (
        <div className="block-container">
            <div className="border mockup-window bg-base-300 cursor-pointer shadow-xl">
                <img src={data.project.image[0].url} className="w-full h-full object-cover" />
            </div>
            <h2 className="secondary-title">{data.project.name}</h2>
            <div className="prose">
                {data.project.description}
            </div>
        </div>
    )
}