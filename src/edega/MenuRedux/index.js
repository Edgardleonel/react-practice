import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import MenuMobile from '../MenuMobile';

function MenuRedux() {


  const dispatch = useDispatch();

  const [state, setState] = useState({
    left: false,
});



const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });

    dispatch({
      type: 'ADD_CLICK',
      anchor: anchor,
      open: open,
      event: event
    })

};
 

  return (
      <>
        <button onClick={toggleDrawer('left', true)}>open</button>
         <MenuMobile />

  
      </>
  );
}

export default connect()(MenuRedux);