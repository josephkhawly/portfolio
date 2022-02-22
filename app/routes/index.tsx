// import Clients from "~/components/Clients";
// import Hero from "~/components/Hero";
// import Hire from "~/components/Hire";
import Work from "~/components/Work";
import { GraphQLClient, gql } from 'graphql-request';
import { json, LoaderFunction, useLoaderData } from "remix";

const queryProjects = gql`
    {
        projects {
          name
          slug
          image {
            url
          }
        }
    }
`

export let loader: LoaderFunction = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckzxewqxy4l2h01ys17lt7m2b/master'
  );

  const { projects } = await graphcms.request(queryProjects);
  return json({ projects });
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
