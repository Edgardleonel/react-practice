import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import {Container} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import './styles.scss';

function Slide() {
  const [loading, setLoading] = useState(true);
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true
    }

    useEffect(() => {
      async function _Load() {
          window.scrollTo(0, 0);
          setTimeout(() => {
            setLoading(false)
          }, 2000)
      }
      _Load();
  }, []);

  return (
    <>
   
    <div className="section-slider">
        <h2><small>especial para você</small>produtos selecionados</h2>
    <Container>
    <Slider {...settings}>
      <div className="product-holder">
      {loading ? <Skeleton height={294} width={194} /> :
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/QWQBWEba.png')"}}></div>
      }
      </div>
      <div className="product-holder">
      {loading ? <Skeleton height={294} width={194} /> :
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/q9Awf8Pu.png')"}}></div>
      }
      </div>
      <div className="product-holder">
      {loading ? <Skeleton height={294} width={194} /> : 
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/j1sbC6J5.png')"}}></div>
      }
      </div>
      <div className="product-holder">
      {loading ? <Skeleton height={294} width={194} /> : 
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/Xr70F7Bx.png')"}}></div>
      }
        </div>
      <div className="product-holder">
      {loading ? <Skeleton height={294} width={194} /> : 
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/QWQBWEba.png')"}}></div>
      }
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/q9Awf8Pu.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/j1sbC6J5.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/Xr70F7Bx.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/QWQBWEba.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/q9Awf8Pu.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/j1sbC6J5.png')"}}></div>
      </div>
      <div className="product-holder">
        <div className="product-thumb" style={{backgroundImage: "url('https://media.edega.com.br/Xr70F7Bx.png')"}}></div>
      </div>
      
     
    </Slider>
    </Container>
  </div>
  </>
  );
}

export default Slide;