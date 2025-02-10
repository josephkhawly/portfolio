import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Joseph Khawly',
}

export default function About() {
  return (
    <div className='block-container'>
      <div className='prose md:prose-lg m-auto'>
        <h1 className='text-center'>About Me</h1>
      </div>
    </div>
  )
}
