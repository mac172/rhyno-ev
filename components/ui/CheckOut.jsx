export default function CheckOut() {
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled value="Select Your Rhyno">Select Your Rhyno</option>
                    <option>SE03</option>
                    <option>SE03 Lite</option>
                    <option>SE03 Max</option>
                </select>
            </div>
            <div className="flex justify-center items-center">
                <button className="btn bg-green-700 rounded-xl m-4 hover:scale-125">Add to Cart</button>
                <button className="btn bg-teal-400 rounded-xl m-4 hover:scale-125">Buy Now</button>
            </div>
        </div>
    )
}