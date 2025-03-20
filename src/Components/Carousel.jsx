import { useState } from "react";

function Carousel() {
  return (
    <div className="w-full md:w-1/2 h-full">
      <img
        src="https://www.premiercollege.edu.np/enroll/images/banner.jpg?refresh=true"
        alt="Admissions"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default Carousel;
