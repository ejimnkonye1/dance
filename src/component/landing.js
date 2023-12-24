import React from "react";
import img1 from '../images/Dancer.png'
import '../css/land.css'
import 

{ FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video1 from '../images/mee.mp4'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Land = () => {

    return(
        <>
        <div className="land">
            <div className="lander">
            <div className="image-sec">
            <video
        src={video1}
        alt="dancer"
        width="" // Adjust the width as needed
        height="" // Adjust the height as needed
        controls // Add controls for play, pause, etc.
      />
            </div>
            <div className="text-sec">
                <div className="text">
                <div className="enjoy">
                    <h4>Enjoy each step along the way.</h4>
                </div>
                <div className="learn">
                    <h2>
                    Learn to dance<br/> with style
                    </h2>
                </div>
                <div className="more" >
                    <a href="#11">Learn More</a>
                   <div className="arrow">

                 
                    <FontAwesomeIcon className="ml-5" icon={faCircleArrowRight} />
              </div>
                </div>
                <div className="follow">
                    <div className="icon">
                        <h5>Follow us</h5>
                        
                        <div className="social">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-twitter"></i>
                        </div>
                    </div>
                </div>
</div>
            </div>

            </div>
            </div>
        
        </>
    )
}
export default Land;