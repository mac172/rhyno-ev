import { TextGenerateEffect } from "@/components/ui/TextGen";
import { FaAndroid, FaAppStoreIos } from "react-icons/fa";

const word = `
explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.

Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.


`

export default function Rentals() {
    return (
        <div>
            <div>
                <h2 className="text-center text-6xl mt-10">Rentals</h2>
            </div>
            <TextGenerateEffect words={word} />
            <p className="text-center">Download our rental app:  | Apple</p>
            <div className="flex justify-center items-center pb-10 mb-10 pt-6">
                <button className="m-8 btn bg-green-500 rounded-lg">
                <FaAndroid size={28}
                />
                </button>
                <span className="btn bg-cyan-500 rounded-lg"><FaAppStoreIos size={28}/></span>
            </div>
        </div>
    )
}