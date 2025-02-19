import React from 'react'

import { getCachedGlobal } from '@/utils/getGlobals'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'

export default async function HomePage() {
  const { name, intro } = await getCachedGlobal('hero')()

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 hero-gradient'>
      <div className='max-w-3xl w-full space-y-8 text-center'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-chart-2'>
            Hi, I&apos;m {name}
          </h1>
          <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>{intro}</p>
        </div>
        <div className='flex justify-center space-x-4'>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='hover:bg-accent hover:text-accent-foreground'
          >
            <Link href='https://github.com/josephkhawly' target='_blank'>
              <LuGithub className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='hover:bg-accent hover:text-accent-foreground'
          >
            <Link href='https://linkedin.com/in/josephkhawly' target='_blank'>
              <LuLinkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </Button>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='hover:bg-accent hover:text-accent-foreground'
          >
            <Link href='mailto:joseph.khawly@gmail.com'>
              <LuMail className='h-5 w-5' />
              <span className='sr-only'>Email</span>
            </Link>
          </Button>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <Card className='p-6 card-hover border-accent/20'>
            <h3 className='font-semibold mb-2 text-lg'>Frontend Development</h3>
            <p className='text-sm text-muted-foreground'>
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </Card>
          <Card className='p-6 card-hover border-accent/20'>
            <h3 className='font-semibold mb-2 text-lg'>Backend Development</h3>
            <p className='text-sm text-muted-foreground'>Node.js, Python, PostgreSQL, AWS</p>
          </Card>
          <Card className='p-6 card-hover border-accent/20'>
            <h3 className='font-semibold mb-2 text-lg'>DevOps & Tools</h3>
            <p className='text-sm text-muted-foreground'>Docker, Kubernetes, CI/CD, Git</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
