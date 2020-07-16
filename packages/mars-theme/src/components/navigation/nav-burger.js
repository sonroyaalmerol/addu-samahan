import React from "react";
import { connect, styled } from "frontity";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default connect(function NestedList({ state, actions, onChosen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState('');

  const handleClick = (name) => {
    if(name === open) {
      setOpen('');
    } else {
      setOpen(name);
    }
  };

  const handleLink = (newValue) => {
    actions.router.set(newValue);
    onChosen();
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          SAMAHAN
        </ListSubheader>
      }
      className={classes.root}
    >
      {state.theme.menu.map((menu) => {
        return 'submenu' in menu ? (
          <React.Fragment key={`${menu.name}`}>
            <ListItem key={`${menu.name}_item`} button onClick={() => handleClick(menu.name)}>
              <ListItemText primary={menu.name} />
              {open === menu.name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse key={`${menu.name}_collapse`} in={open === menu.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.submenu.map((subMenu) => {
                  return (
                    <ListItem key={`${subMenu.name}_collapse`} button className={classes.nested} onClick={() => handleLink(subMenu.href)} >
                      <ListItemText primary={subMenu.name} />
                    </ListItem>
                  )
                })}
              </List>
            </Collapse>
          </React.Fragment>
        ) : (
          <ListItem key={`${menu.name}_item`} button onClick={() => handleLink(menu.href)} >
            <ListItemText primary={menu.name} />
          </ListItem>
        )
      })}
    </List>
  );
})