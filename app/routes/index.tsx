// import Clients from "~/components/Clients";
// import Hero from "~/components/Hero";
// import Hire from "~/components/Hire";
import Work from "~/components/Work";
import { gql } from 'graphql-request';
import { json, LoaderFunction, useLoaderData } from "remix";
import { graphcms } from "~/utils/graphcms";

const queryProjects = gql`
    {
        projects {
          name
          slug
          image {
            handle
            width
            height
          }
        }
    }
`

export let loader: LoaderFunction = async () => {
  const { projects } = await graphcms.request(queryProjects)
  return json({ projects })
}

export default function Index() {
  let data = useLoaderData()
  return (
    <>
      {/* <Hero /> */}
      <Work projects={data.projects} />
      {/* <Clients /> */}
      {/* <Hire /> */}
    </>
  );
}
