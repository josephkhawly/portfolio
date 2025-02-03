import Hero from '@/components/Hero'
import Work from '@/components/Work'
import { gql } from 'graphql-request'
import { graphcms } from '@/utils/graphcms'

const queryProjects = gql`
  {
    projects(orderBy: name_ASC) {
      name
      slug
      image {
        url
        width
        height
      }
    }

    author(where: { slug: "joseph-khawly" }) {
      name
      intro
    }
  }
`

export default async function Page() {
  const { projects, author } = await graphcms.request(queryProjects)
  return (
    <>
      <Hero author={author} />
      <Work projects={projects} />
    </>
  )
}
