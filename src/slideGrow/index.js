import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import './styles.scss';

function SlideGrow() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function _Load() {
            setTimeout(() => {
              setLoading(false)
            }, 2000)
        }
        _Load();
    }, []);

  return (
      <>
        {loading ? <Skeleton height={500} width={'100%'} /> :
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
        }
      </>
  );
}

export default SlideGrow;