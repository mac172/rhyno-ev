import {CardContainer, CardItem} from "@/components/CardContainer"
import Image from "next/image"
import { Button } from "@/components/ui/BuyNowBtn"
import { Meteors } from "@/components/ui/Meteor"
import {motion} from 'framer-motion'

export default function Compare() {
    return (
        <div>
            <CardContainer className="inter-var dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black lg:w-[52rem]">
                <CardItem translateZ="100" className="w-auto h-auto mt-4">
                <Image
                    src={`/images/group.png`}
                    height="1000"
                    width="1000"
                    alt="thumbnail"
                />
                </CardItem>
            </CardContainer>

            <div className="">
            <Meteors number={20} />
            <h2 className="text-center mt-10 text-4xl font-bold">Want to Book Ride </h2>
            <div>
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

            <h2 className="text-center text-4xl font-medium">Confuse About Buying See Below...</h2>
            </div>

            {/* <motion.div> */}
                <div className="overflow-x-auto border rounded-lg p-16 m-16 sm:p-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Specification</th>
                                <th>Rhyno SE03</th>
                                <th>Rhyno SE03 Lite</th>
                                <th>Rhyno SE03 Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Battery</td>
                                <td>2.7Kwh</td>
                                <td>1.8Kwh</td>
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
                                <td>3 Years</td>
                                <td>3 Years</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Charging Time</td>
                                <td>4 hours (12A)</td>
                                <td>3 hours (12A)</td>
                                <td>4 hours (12A)</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Motor</td>
                                <td>1500W</td>
                                <td>1500W</td>
                                <td>2000W</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Max Speed</td>
                                <td>55 km/h</td>
                                <td>65 km/h</td>
                                <td>65 km/h</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Warranty on Electronics</td>
                                <td>1 Year</td>
                                <td>1 Year</td>
                                <td>1 Year</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Max Range (@30km/h)</td>
                                <td>150 km</td>
                                <td>100 km</td>
                                <td>120 km</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Max Range (@45km/h)</td>
                                <td>110 km</td>
                                <td>90 km</td>
                                <td>100 km</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Max Range (@full speed)</td>
                                <td>90 km</td>
                                <td>70 km</td>
                                <td>80 km</td>
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
                                <td>
                                    <li>Fire-Safe Battery</li>
                                    <li>Range Prediction</li>
                                    <li>Comfortable Ride</li>
                                    <li>Stable And Safe</li>
                                </td>
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
            {/* </motion.div> */}
        </div>
    )
}