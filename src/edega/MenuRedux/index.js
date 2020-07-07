import React from 'react';
import { connect } from 'react-redux';
import MenuMobile from '../MenuMobile';



function MenuRedux() {
   

  return (
      <>
        <MenuMobile />
      </>
  );
}

export default connect()(MenuRedux);