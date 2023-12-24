import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const DanceClass = ({ danceClass, onRegisterClick }) => {
  const { className, description, startDate, duration, price,img } = danceClass;
  const [showAlert, setShowAlert] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setButtonDisabled(true);

    // Set a timeout to hide the alert after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      setShowAlert(false);
      setButtonDisabled(true);
    }, 2000);
  };

  useEffect(() => {
    // Cleanup after component unmounts to avoid memory leaks
    return () => clearTimeout(handleShowAlert);
  }, []);

  return (
    <div className="card">
   
      <div className="card-body p-2">
      <img src={img} className="card-img-top" alt={className} />
        <h5 className="card-title text-danger mt-2">{className}</h5>
        <p className="card-text">{description}</p>
        <p>Start Date: {startDate}</p>
        <p>Duration: {duration}</p>
        <p>Price: ${price}</p>
        {showAlert && (
        <div className="alert alert-success d-flex align-items-center" id="liveAlertPlaceholder" role="alert">
         
          <div>
<FontAwesomeIcon icon={faCheckCircle} />
           You have succesfully purchase this dance class.
          </div>
        </div>
      )}
        <button className="btn btn-warning" 
        type="button"
       
        id="liveAlertBtn"
        onClick={handleShowAlert}
        disabled={buttonDisabled}
        
       >
         Enroll now
        </button>
      </div>
    </div>
  );
};

export default DanceClass;
