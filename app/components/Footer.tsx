import { SiAngellist, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
    const iconSize = 24
    return (
        <footer className="px-10 pt-10 pb-24 md:pb-10 footer footer-center">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/josephkhawly/' target="_blank" rel='noopener noreferrer'><SiLinkedin size={iconSize} /> </a>
                    <a href='https://github.com/josephkhawly' target="_blank" rel='noopener noreferrer'><SiGithub size={iconSize} /></a>
                    <a href='https://angel.co/u/joseph-khawly' target="_blank" rel='noopener noreferrer'><SiAngellist size={iconSize} /> </a>
                </div>
            </div>
            <div>
                <p>© {new Date().getFullYear()} Joseph Khawly</p>
            </div>
        </footer>
    )
}