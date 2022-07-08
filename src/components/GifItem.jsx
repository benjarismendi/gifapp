import { useState } from "react"

export const GifItem = ({title, fixed_height, fixed_height_still, original}) => {

    const [mouseOn, setMouseOn] = useState(true);

    const handleMouseEnter = () => {
        setMouseOn(!mouseOn)
    }
  
    return (
        <div className="card w-25">
            <img className="card-img-top" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter} src={mouseOn ? fixed_height_still : fixed_height} alt="gif" />
            <div className="card-body">
                <p className="card-text" style={{color: "black"}}>{title}</p>
            </div>
        </div>
    )
}
