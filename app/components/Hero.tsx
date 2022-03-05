export default function Hero() {
    return (
        <div className="hero h-96 bg-primary text-primary-content">
            <div className="text-center hero-content flex-col-reverse md:flex-row">
                <div className="max-w-md text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Joseph.</h1>
                    <p className="py-4">I'm a full-stack developer building websites with Django and React.</p>
                    {/* <button className="btn btn-secondary">See my work</button> */}
                </div>
                <div className="avatar mask mask-squircle">
                    <div className="w-28 rounded">
                        <img src="https://api.lorem.space/image/face?hash=92048" />
                    </div>
                </div>
            </div>
        </div>
    )
}