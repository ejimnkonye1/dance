// src/components/Dancers4LifeClub.js
import React from 'react';

import DanceClass from './Dance';
import Event from './UpEvents';
import danceClasses from '../Data/danceclass';
import events from '../Data/event';

const Dancers4LifeClub = () => {
  return (
    <div className='p-5'>
      {/* <h1>Dancers4Life Club</h1> */}
      

      <h2 className='text-center'>Events</h2>
      <div className="row">
        <div className="col-md-4">
          {events.map((event) => (
            <Event
              key={event.id}
              event={event}
              onBuyTicketClick={() => console.log(`Bought a ticket for ${event.eventName}`)}
            />
          ))}
        </div>
        <div className="col-md-4">
          {events.map((event) => (
            <Event
              key={event.id}
              event={event}
              onBuyTicketClick={() => console.log(`Bought a ticket for ${event.eventName}`)}
            />
          ))}
        </div>
        <div className="col-md-4">
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
  );
};

export default Dancers4LifeClub;
