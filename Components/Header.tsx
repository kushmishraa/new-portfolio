interface headerPropType {
    showHeader?: boolean
}

import React, { useEffect, useRef } from "react"

const Header: React.FC<headerPropType> = ({ showHeader }) => {

    return (
        <>
            {
                showHeader && <div className="fixed top-0 z-20 h-[50px] w-full bg-black">
                </div>
            }

        </>

    )
}

export default Header