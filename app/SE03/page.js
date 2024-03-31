"use client"

import Image from "next/image"
import {CardContainer, CardItem} from "@/components/CardContainer"
import { useState } from "react"
import { TextGenerateEffect } from "@/components/ui/TextGen"
import { Button } from "@/components/ui/BuyNowBtn"
import { motion } from "framer-motion"

const word = `
        Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensure a thrilling ride while still delivering an impressive 80-100 km range on single charge. Like its counterparts, this machine features the safety assurance of fire-safe advanced LFp battery, along with comphressive benefits of owig a Rhyno. Boasting formidable combination of 2000W motor and 2.7kWh battery, this beast ready to roar on raods. Providing an electrifying journey at every turn. Check out other details below!  
`

export default function SE23Max() {
    const [img, setImg] = useState("s23");
    const [selectColor, setSelectColor] = useState();
    const onColorSelect = (e) => {
        setSelectColor(e.target.value);
        setImg(e.target.value);
    }

    return (
        <div>

            <CardContainer className="inter-var dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black lg:w-[52rem]">
                <CardItem translateZ="100" className="w-auto h-auto mt-4">
                <Image
                    src={`/images/${img}.png`}
                    height="1000"
                    width="1000"
                    alt="thumbnail"
                />
                </CardItem>
            </CardContainer>

            <h2 className="text-center text-4xl p-10 border-t-2 border-gray-900">Select Your Bike Color </h2>
            <div className="flex justify-center items-center">
                <ul className="flex">
                    <li className="p-6">
                        <input type="radio" name="radio-1" value="s23max" id="s23max" className="radio radio-lg"  
                        checked={selectColor === "s23max"}
                        onChange={onColorSelect}
                        />
                    </li>
                    <li className="p-6">
                        <input type="radio" name="radio-1" value="s23" id="s23" className="radio radio-warning radio-lg" 
                        checked={selectColor === "s23"}
                        onChange={onColorSelect}
                        />
                    </li>
                    <li className="p-6">
                        <input type="radio" name="radio-1" value="s23lite" id="s23lite" className="radio radio-error radio-lg"
                        checked={selectColor === "s23lite"}
                        onChange={onColorSelect}
                        />
                    </li>
                </ul>
            </div>

            <h1 className="text-center text-6xl p-6">Rhyno SE03</h1>
            <TextGenerateEffect words={word} />

            <motion.div>
                <div className="overflow-x-auto sm:overflow-x-auto border rounded-lg p-6 m-8 sm:p-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Specification</th>
                                <th>Rhyno SE03</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Battery</td>
                                <td>2.7Kwh</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Battery Features</td>
                                <td>
                                    <li>
                                        LFP with 1500 cycles
                                    </li>
                                    <li>
                                        Active Balancing
                                    </li>
                                    <li>
                                        Waterproof (IP67)
                                    </li>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Battery Warranty</td>
                                <td>3 Years</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Charging Time</td>
                                <td>4 hours (12A)</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Motor</td>
                                <td>1500W</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Max Speed</td>
                                <td>55 km/h</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Warranty on Electronics</td>
                                <td>1 Year</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Max Range (@30km/h)</td>
                                <td>150 km</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Max Range (@45km/h)</td>
                                <td>110 km</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Max Range (@full speed)</td>
                                <td>90 km</td>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td>Other Key Benefits</td>
                                <td>
                                    <li>Fire-Safe Battery</li>
                                    <li>Range Prediction</li>
                                    <li>Comfortable Ride</li>
                                    <li>Stable And Safe</li>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            <div className="flex justify-center items-center p-10 hover:translate-z-16">
                <CardContainer>
                <CardItem translateZ="100">
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                    Buy Now →
            </Button>           
                </CardItem>

                </CardContainer>
            </div>
        </div>
    )
}
