import React from 'react';

import './styles.scss';

function Load() {
  return  (
      <>
        <div id="preloder">
        <div className="loader"></div>
        <div className="text-loader">
            <p>Preparando seu Drink...</p>
        </div>

        </div>
      </>
  );
}

export default Load;