export default function PreBookBtn() {
    return (
        <div className="fixed z-22 lg:bottom-4 bottom-28 lg:right-10 right-20 lg:w-24 lg:h-24 w-8 h-8"
        >
            <a href="/prebook">
                <h2 className="text-center pt-4 btn btn-circle w-20 h-20
                    hover:scale-125
                    bg-[radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]">Pre-Book <br />Now</h2>
            </a>
        </div>
    )
}