"use client"
import {motion} from "framer-motion"
export default function CheckOut() {
    return (
        <motion.div className="pb-32"
          initial={{ opacity: 0.5, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
            <div className="flex justify-center items-center">
                <select className="select select-bordered w-full max-w-xs"
                >
                    <option disabled value="Select Your Rhyno">Select Your Rhyno</option>
                    <option value="se23">SE03</option>
                    <option value="se23lite">SE03 Lite</option>
                    <option value="se23max">SE03 Max</option>
                </select>
            </div>
            <div className="flex justify-center items-center">
                <button className="btn bg-green-700 rounded-xl m-4 hover:scale-125">Add to Cart</button>
                <button className="btn bg-teal-400 rounded-xl m-4 hover:scale-125">
                    <a href="/prebook">Buy Now</a>
                </button>
            </div>
        </motion.div>
    )
}