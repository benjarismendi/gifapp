import { useState } from "react";
import PropTypes from 'prop-types';

export const GifItem = ({
  title,
  fixed_height,
  fixed_height_still,
  original,
}) => {
  const [mouseOn, setMouseOn] = useState(true);

  const handleMouseEnter = () => {
    setMouseOn(!mouseOn);
  };

  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
        src={mouseOn ? fixed_height_still : fixed_height}
        alt="gif"
      />
      <div className="card-body">
        <p className="card-text" style={{ color: "black" }}>
          {title}
        </p>
      </div>
    </div>
  );
};

GifItem.PropTypes = {
  title: PropTypes.string.isRequired
  
}
