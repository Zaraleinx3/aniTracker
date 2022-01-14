import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';

import useStyles from '../styles/navbarStyles';

import navItems from '../mocks/api/navItems';
import providerList from '../mocks/api/providerList';

export default function Navbar(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            AniTracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            navItems().map((item, key) => (
              <ListItem button key={key} component={Link} to={item.route}>
                  <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
                <ListItemText primary={item.description} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            providerList().map((item, key) => (
              <a href={item.link} key={key} target="_blank" rel="noopener noreferrer" className={classes.providerText}>
                <ListItem button href={item.link} target="_blank" rel="noopener noreferrer">
                  <ListItemIcon>
                      <img src={item.icon} alt={item.alt} className={classes.providerImage} />
                    </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </a>
            ))
          }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.content}
      </main>
    </div>
  );
}


