import { useState } from "react"

export const GifItem = ({title, fixed_height, fixed_height_still, original}) => {

    const [mouseOn, setMouseOn] = useState(true);

    const handleMouseEnter = () => {
        setMouseOn(!mouseOn)
    }
  
    return (
        <div className="card">
            <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter} src={mouseOn ? fixed_height_still : original} alt="gif" />
            <p>{title}</p>
        </div>
    )
}
