// import Clients from "~/components/Clients";
import Hero from "~/components/Hero";
import Work from "~/components/Work";
import { gql } from 'graphql-request';
import { json, LoaderFunction, useLoaderData } from "remix";
import { graphcms } from "~/utils/graphcms";

const queryProjects = gql`
    {
        projects(orderBy: name_ASC) {
          name
          slug
          image {
            handle
            width
            height
          }
        }

        author(where: {slug: "joseph-khawly"}) {
          name
          intro
        }
    }
`

export let loader: LoaderFunction = async () => {
  const { projects, author } = await graphcms.request(queryProjects)
  return json({ projects, author })
}

export default function Index() {
  let data = useLoaderData()
  return (
    <>
      <Hero author={data.author} />
      <Work projects={data.projects} />
      {/* <Clients /> */}
    </>
  );
}
