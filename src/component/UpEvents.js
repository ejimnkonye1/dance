import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Event = ({ event, onBuyTicketClick }) => {
  const { eventName, date, location } = event;
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
      <div className="card-body mt-3 p-2">
        <h5 className="card-title text-danger">{eventName}</h5>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        {showAlert && (
        <div className="alert alert-success d-flex align-items-center" id="liveAlertPlaceholder" role="alert">
         
          <div>
<FontAwesomeIcon icon={faCheckCircle} />
           You succesfully purchase  a Ticket
          </div>
        </div>
      )}
        <button className="btn btn-warning mb-3 "
          type="button"
       
          id="liveAlertBtn"
          onClick={handleShowAlert}
          disabled={buttonDisabled}>
    
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default Event;
