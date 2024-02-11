import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
       <div className="h-full w-full md:w-3/4 md:h-3/4  flex flex-col md:flex-row">
        <div className="h-1/2 md:h-full w-full md:w-1/2">
        <img className="h-full w-full"
            src="https://thumbs.dreamstime.com/b/woman-playing-guitar-close-up-acoustic-dark-background-picture-toning-square-relation-sides-95467611.jpg"
            alt="Product Image"
          />
        </div>
         <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center items-center p-2">
            <p className="titleFont">Sharad Music Store</p>
            <p className="subTitleFont">Explore a vast collection of music at our store – a harmonious blend of genres awaits. Find your favorite tunes and discover new melodies for every mood. Shop now!</p>
            <p>1.0.0</p>
         </div>
       </div>
    </div>
  );
};

export default Hero;
