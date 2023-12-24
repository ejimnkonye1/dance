import React from "react";

import video1 from '../images/mee.mp4'
import Classdance from "./class";
import Testimonial from "./test";
import Tic from "./tic";
const Lander = () => {

    return(
        <>
        <div className="">
            <div className="">
            <div className="">
            <video
        src={video1}
        alt="dancer"
        width="100%" // Adjust the width as needed
        height="100%" // Adjust the height as needed
        autoPlay // Add controls for play, pause, etc.
      />
            </div>
            <Classdance />
   <Testimonial />
 
   <Tic />

            </div>
            
            </div>
        
        </>
    )
}
export default Lander;