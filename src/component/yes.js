import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Yes = () => {
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
    <>
      {showAlert && (
        <div className="alert alert-success d-flex align-items-center" id="liveAlertPlaceholder" role="alert">
         
          <div>
<FontAwesomeIcon icon={faCheckCircle} />
            An example success alert with a checkmark symbol
          </div>
        </div>
      )}

<button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={handleShowAlert}
        disabled={buttonDisabled}
      >
        Show live alert
      </button>
    </>
  );
};

export default Yes;
