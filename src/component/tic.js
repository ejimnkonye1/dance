import React from "react";
import img from '../images/medium-shot-happy-people-dancing-together.jpg'
import img1 from '../images/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space.jpg'
import events from "../Data/event";
import Event from "./UpEvents";

const Tic = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner p-5">
          <h2 className='text-center mt-3 mb-5'>Upcoming Events</h2>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-12">
                <img src={img1} alt="" />
                {events.map((event) => (
                  <Event className='mb-5'
                    key={event.id}
                    event={event}
                    onBuyTicketClick={() => console.log(`Bought a ticket for ${event.eventName}`)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-12">
                <img src={img} alt="" />
                {events.map((event) => (
                  <Event
                    key={event.id}
                    event={event}
                    onBuyTicketClick={() => console.log(`Bought a ticket for ${event.eventName}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tic;
