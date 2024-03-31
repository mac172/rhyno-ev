"use client"

import React from "react"
import { useRef } from "react"
// add type animation to package.json
import { TypeAnimation } from "react-type-animation"
import { BackgroundBeams } from "./Grid"
import Card from "@/components/Card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Frontline() {
    const header = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".rhyno",{opacity: 0,scale: 0, duration: 1.3})
        tl.from(".rhyno-sub", {opacity: 0, y: "-50%", duration: 1.1, delay: 0.5})
        tl.from(".rhyno-left", {opacity: 0, x: "100%", duration: 1, delay: 0.5})
    },[])
    return (
        <div>
            <div className="h-[26rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 opacity-1" ref={header}>
                <h1 className="rhyno relative z-10 text-7xl sm:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-black">
                Rhyno
                </h1>
                <p className="rhyno-sub text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                Let's Elevate Your Ride Experience 
                </p>
                    <div className="rhyno-left flex justify-center itmes-center">
                        <p>- Where Superiority Meets  
                            <TypeAnimation 
                                sequence={[
                                    " Style",
                                    1000,
                                    " Elegance",
                                    1000,
                                    " Minimalism",
                                    1000,
                                    " Comfort",
                                    1000
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{color: 'wheat'}}
                            />
                        </p>
                    </div>
            </div>
            <BackgroundBeams />
            </div>
            <Card />
        </div >
    )
}