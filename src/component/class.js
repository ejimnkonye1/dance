import React from "react";
import '../css/class.css';
import DanceClass from './Dance';
import danceClasses from '../Data/danceclass';
import danceClasses2 from '../Data/danceclass2';
import danceClasses3 from '../Data/danceclass3';
import danceClasses4 from '../Data/danceclass4';

const Classdance = () => {
    
  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center">Our Classes</h1>
        </div>
        <div className="content row m-1">
          {danceClasses.map((danceClass) => (
            <div key={danceClass.id} className="content-column col-md-6">
              <img src={danceClass.image} alt="" className="class-img" />
              <DanceClass
                danceClass={danceClass}
                onRegisterClick={() => console.log(`Registered for ${danceClass.className}`)}
              />
            </div>
          ))}
          {danceClasses2.map((danceClass) => (
            <div key={danceClass.id} className="content-column col-md-6">
              <img src={danceClass.image} alt="" className="class-img" />
              <DanceClass
                danceClass={danceClass}
                onRegisterClick={() => console.log(`Registered for ${danceClass.className}`)}
              />
            </div>
          ))}
          {danceClasses3.map((danceClass) => (
            <div key={danceClass.id} className="content-column col-md-6">
              <img src={danceClass.image} alt="" className="class-img" />
              <DanceClass
                danceClass={danceClass}
                onRegisterClick={() => console.log(`Registered for ${danceClass.className}`)}
              />
            </div>
          ))}
          {danceClasses4.map((danceClass) => (
            <div key={danceClass.id} className="content-column col-md-6">
              <img src={danceClass.image} alt="" className="class-img" />
              <DanceClass
                danceClass={danceClass}
                onRegisterClick={() => console.log(`Registered for ${danceClass.className}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Classdance;
