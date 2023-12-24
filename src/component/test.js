import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/Ellipse 3 (1).png'
import img2 from '../images/Ellipse 3 (2).png'
import img3 from '../images/Ellipse 3.png'
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Allen King',
      rating: 5,
      content: 'This was one of the best learning   experiences I’ve ever had. The teachers  were friendly and gave me great advice. ',
      image: img1,
    },
    {
      id: 2,
      name: 'Alexandra laurent',
      rating: 4,
      content: 'I’ve learned a Variety of new things  that helped me a lot in my career   as a choregrapher .',
      image: img2,
    },
    {
      id: 3,
      name: 'Alice Smith',
      rating: 5,
      content: ' The user-friendly interface and comprehensive tutorials make it an ideal choice for beginners.',
      image: img3,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row m-1 p-2">
        
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-4 mt-2">
            <div className="card text-center">
              <div className="card-body" style={{backgroundColor:'white'}}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.content}</p>
                <div className="rating">
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                  
<FontAwesomeIcon key={index} icon={faStar} color=" #FF8C00" />

                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
