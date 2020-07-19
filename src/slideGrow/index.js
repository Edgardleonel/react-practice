import React from 'react';

import './styles.scss';

function SlideGrow() {
  return (
      <>
       <div className="hero-home__slide">
          <div className="slide-text">
              <span className="eyebrow">PROMOÇÃO DIVA BOUTEILLE</span> 
              <header className="section__head">
                  <h2 className="section__title"></h2>
              </header>
              <p className="section__p"></p>
              <a href="" className="btn-text">
              <span>Confira!</span>
              <i className="ico-dot"></i>
              </a>
           </div>
           <div className="hero-img img-hover-zoom">
               <a href="">
                   <img src="https://media.edega.com.br/VwFbsFdb.jpg" alt="home hero"  />
                </a>
            </div>
        </div>
      </>
  );
}

export default SlideGrow;