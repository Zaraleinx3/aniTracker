import * as React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';

import { AtAppBar, AtDrawer, AtDrawerHeader } from './Navbar.overrides';
import navItems from '../../mocks/api/navItems';
import providerList from '../../mocks/api/providerList';

export default function Navbar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AtAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AniTracker
          </Typography>
        </Toolbar>
      </AtAppBar>
      <AtDrawer variant="permanent" open={open}>
        <AtDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </AtDrawerHeader>
        <Divider />
        <List>
        {
            navItems().map((item, key) => (
                <ListItemButton 
                    key={key} 
                    component={Link} 
                    to={item.route}
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>
                            <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                    <ListItemText primary={item.description} sx={{ opacity: open ? 1 : 0 }}/>
                </ListItemButton>
            ))
          }
        </List>
        <Divider />
        <List>
        {
            providerList().map((item, key) => (
                <a href={item.link} key={key} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#fff'}}>
                    <ListItemButton 
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                width: '25px'
                            }}>
                            <img src={item.icon} alt={item.alt} style={{width: '25px'}} />
                        </ListItemIcon>
                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }}/>
                    </ListItemButton>
                </a>
            ))
          }
        </List>
      </AtDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AtDrawerHeader />
            {props.content}
      </Box>
    </Box>
  );
}