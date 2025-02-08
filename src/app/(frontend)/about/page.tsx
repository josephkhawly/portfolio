import { graphcms } from '@/utils/graphcms'
import { gql } from 'graphql-request'
import { marked } from 'marked'
import { Metadata } from 'next'

const queryBio = gql`
  {
    author(where: { slug: "joseph-khawly" }) {
      name
      intro
      bio
    }
  }
`

export const metadata: Metadata = {
  title: 'About | Joseph Khawly',
}

export default async function About() {
  const { author } = await graphcms.request(queryBio)

  return (
    <div className='block-container'>
      <div className='prose md:prose-lg m-auto'>
        <h1 className='text-center'>About Me</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(author.bio) }} />
      </div>
    </div>
  )
}
