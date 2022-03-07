
type Author = {
    name: string;
    intro: string;
}

export default function Hero({ author }: { author: Author }) {
    return (
        <div className="hero h-96 bg-primary text-primary-content">
            <div className="text-center hero-content flex-col-reverse md:flex-row">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">I'm {author.name}</h1>
                    <p className="py-4">{author.intro}</p>
                </div>
            </div>
        </div>
    )
}