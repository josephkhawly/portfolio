import { SiGithub, SiLinkedin, SiWellfound } from 'react-icons/si'
import { GoTerminal } from 'react-icons/go'

export default function Footer() {
  const iconSize = 24
  return (
    <footer className='p-10 footer footer-horizontal sm:footer-vertical footer-center'>
      <div>
        <div className='grid grid-flow-col gap-4'>
          <a
            href='https://www.linkedin.com/in/josephkhawly/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiLinkedin size={iconSize} />
          </a>
          <a href='https://github.com/josephkhawly' target='_blank' rel='noopener noreferrer'>
            <SiGithub size={iconSize} />
          </a>
          <a href='https://wellfound.com/u/joseph-khawly' target='_blank' rel='noopener noreferrer'>
            <SiWellfound size={iconSize} />
          </a>
          <a href='https://terminal.josephkhawly.dev/'>
            <GoTerminal size={iconSize} />
          </a>
        </div>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Joseph Khawly</p>
      </div>
    </footer>
  )
}
