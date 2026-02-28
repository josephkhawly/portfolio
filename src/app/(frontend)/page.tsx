// import { getPayload } from 'payload'
// import Image from 'next/image'
// import config from '@payload-config'
// import Work from '@/components/Work'
import { getCachedGlobal } from '@/utils/getGlobals'
// import avatar from '/public/avatar.png'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'


export default async function HomePage() {
  // const payload = await getPayload({ config })
  // const projects = await payload.find({
  //   collection: 'projects',
  //   pagination: false,
  //   select: {
  //     title: true,
  //     slug: true,
  //     image: true,
  //   },
  // })

  const { name } = await getCachedGlobal('hero')()

  return (
    <div className='flex flex-col gap-9'>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        {/* <div className="shrink-0">
          <Image
            src='/avatar.png'
            alt="Joseph Khawly"
            width={120}
            height={120}
            className="rounded-full object-cover aspect-square"
            priority
          />
        </div> */}

        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h1 className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
            {name}
          </h1>
          <p className="font-mono text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Software Engineer
          </p>
        </div>

        <div className="flex gap-5 sm:ml-auto">
          <a
            href="https://github.com/josephkhawly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
            aria-label="GitHub"
          >
            <SiGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/josephkhawly/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-all duration-200 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={26} />
          </a>
          <a
            href="mailto:joseph.khawly@gmail.com"
            className="text-zinc-500 transition-all duration-200 hover:text-purple-600 dark:text-zinc-500 dark:hover:text-purple-400"
            aria-label="Email"
          >
            <SiGmail size={26} />
          </a>
        </div>
      </div>

      <div className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-8">
        <p>Hi, I&apos;m Joseph, a frontend engineer based in Boulder, CO.</p>
        <br />
        <p>I specialize in React, TypeScript, and Next.js. I&apos;m drawn to work that sits at the intersection of technical challenge and visual craft. I&apos;m known for my attention to detail and a genuine commitment to accessibility and user experience.</p>
        <br />
        <p>These days I&apos;m freelancing and taking on projects where I can do my best work for people who care about quality. If that sounds like you, I&apos;d love to hear about what you&apos;re building.</p>
      </div>
    </div>
  )
}
