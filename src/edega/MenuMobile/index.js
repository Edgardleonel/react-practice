import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

import { connect } from 'react-redux';

function MenuMobile({ click }) {
console.log(click);


const [state, setState] = useState({
    left: false,
});


const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });
};

const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};

const list = () => (
<div>
    <List>
    <h1>Hello World!</h1>
    </List>

    <Button onClick={toggleDrawer('left', false)}>Fechar</Button>

    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary>
          <Typography >General settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
       
    <List>
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Drafts" />
        </ListItem>
    </List>
        
        </ExpansionPanelDetails>
    </ExpansionPanel>
</div>
);

  return (
      <>
        <Button onClick={toggleDrawer('left', true)}>left</Button>
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
      </>
  );
}

export default connect(state => ({
    click: state.click,
}))(MenuMobile);