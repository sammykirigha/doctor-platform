import { useState } from "react";

export function ReadMore({children = 100}) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 100) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {result}
            <span className="btn btn-link" onClick={toggleIsShow}>
                {isShow ? "Read More" : "Read Less"}
            </span>
        </p>
    )

}