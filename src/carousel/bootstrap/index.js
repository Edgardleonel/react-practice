import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.scss';

function CarouselBootstrap() {
    const [index, setIndex] = useState(0);
    console.log(index)
    const bootstrap = [
        'bootstrap 1',
        'bootstrap 2',
        'boostrap 3'
    ]

    const footer = [
        'footer 1',
        'footer 2',
        'footer 3'
    ]

    function handleSelect (selectedIndex) {
      setIndex(selectedIndex);
    };


    
  return (
  <>
  {bootstrap.map((b, i) => (
  <h1 key={b}>{index === i ? b : false}</h1>
  ))}
 
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="slider">
        <figure>
            <img
            className="d-block w-100"
            src="https://media.edega.com.br/SWE13aQF.png"
            alt="First slide"
            />
        </figure>
       </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider">
        <figure>
            <img
            className="d-block w-100"
            src="https://media.edega.com.br/Wvz7N523.png"
            alt="Second slide"
            />
        </figure>
       </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider">
        <figure>
            <img
            className="d-block w-100"
            src="https://media.edega.com.br/HqgBxFhG.png"
            alt="Third slide"
            />
        </figure>
      </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {footer.map((f, i) => (
         <h1 key={f}>{index === i ? f : false}</h1>
    ))}
  </>
  );

}

export default CarouselBootstrap;