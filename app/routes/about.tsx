import { graphcms } from "~/utils/graphcms";
import { gql } from 'graphql-request';
import { json, LoaderFunction, useLoaderData, MetaFunction } from "remix";
import { marked } from "marked";

const queryBio = gql`
    {
        author(where: {slug: "joseph-khawly"}) {
          name
          intro
          bio
        }
    }
`

export let loader: LoaderFunction = async () => {
    const { author } = await graphcms.request(queryBio)
    return json({ author })
}

export const meta: MetaFunction = () => {
    return {
        title: "About | Joseph Khawly",
    };
};

export default function About() {
    let { author } = useLoaderData()

    return (
        <div className="block-container">
            <div className="prose md:prose-lg m-auto">
                <h1>{author.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: marked(author.bio) }} />
            </div>
        </div>
    )
}