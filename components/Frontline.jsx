"use client"

// add type animation to package.json
import { TypeAnimation } from "react-type-animation"
import { BackgroundBeams } from "./Grid"
import Card from "@/components/Card"

export default function Frontline() {
    return (
        <div>
            <div className="h-[26rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-7xl sm:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-black">
                Rhyno
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                Let's Elevate Your Ride Experience 
                </p>
                    <div className="flex justify-center itmes-center">
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