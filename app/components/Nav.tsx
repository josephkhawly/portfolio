function NavItem({ link, text }) {
    return (
        <a href={link} className="nav-dot block w-7 h-7 rounded-full border-4">
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{text}</span>
        </a>
    )
}

export default function Nav() {
    return (
        <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
            <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                <NavItem link="#" text="Home" />
                <NavItem link="#work" text="Work" />
                <NavItem link="#clients" text="Clients" />
                <NavItem link="#hire" text="Hire" />
            </div>
        </nav>
    )
}