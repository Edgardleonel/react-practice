import React, {useState} from 'react';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import './styles.scss';

import { connect } from 'react-redux';

function MenuMobile({ click }) {
console.log(click);

const [close, setClose] = useState(true);


const list = () => (
<div>
    <List>
    <h1>Hello World!</h1>
    <button onClick={() => setClose(false)}>open</button>
    </List>
</div>
);

  return (
      <>
          <SwipeableDrawer
            anchor={click.anchor}
            open={click.open}
          >
            {list(click.anchor)}
          </SwipeableDrawer>
      </>
  );
}

export default connect(state => ({
    click: state.click,
}))(MenuMobile);