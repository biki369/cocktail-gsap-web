
import { useRef } from "react";
const Hero = () => {
    const videoRef = useRef();

    return (
        <>
            <section id='hero' className='noisy '>
                <h1 className="title text-transform: uppercase">Mojito</h1>
                <img src="/images/hero-left-leaf.png" alt="" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="" className='right-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool Crips. Classic</p>
                            <p className="subtitle">
                                Sip The Spirit <br />
                                Of The Day
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>
                            <a href="#cocktails">View cocktails</a>
                        </div>

                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>


        </>
    )
}

export default Hero
