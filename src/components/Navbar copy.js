import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import clsx from 'clsx';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { createTheme } from '@mui/material/styles';

import useStyles from '../styles/navbarStyles';

import navItems from '../mocks/api/navItems';
import providerList from '../mocks/api/providerList';

export default function Navbar(props) {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      mode: 'dark',
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


