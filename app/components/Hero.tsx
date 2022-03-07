import { ImageType, Img } from "./Img";

type Author = {
    name: string;
    intro: string;
    picture: ImageType;
}

export default function Hero({ author }: { author: Author }) {
    return (
        <div className="hero h-96 bg-primary text-primary-content">
            <div className="text-center hero-content flex-col-reverse md:flex-row">
                <div className="max-w-md text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">{author.name}</h1>
                    <p className="py-4">{author.intro}</p>
                </div>
                <div className="avatar mask mask-squircle">
                    <div className="w-36 rounded">
                        <Img image={author.picture} />
                    </div>
                </div>
            </div>
        </div>
    )
}