'use client'

import Image from "next/image"

const ExploreBtn = () => {
    function handleClick() {

    }
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => handleClick}>
            <a href="#evnets">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
            </a>
        </button>

    )
}

export default ExploreBtn
