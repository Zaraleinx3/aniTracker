import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import { MoreVert, PlaylistAdd} from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';


import NavItems from '../../../mocks/api/navItems';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transSormOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

export default function List(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <CardActions>
            <Grid container>
                <Grid item xs={4}>
                  <Tooltip title="Zur Liste hinzufügen">
                    <IconButton aria-label="add" onClick={handleClick}>
                        <PlaylistAdd />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                <Tooltip title="Optionen">
                  <IconButton aria-label="options"  onClick={() => {console.log("options")}}>
                      <MoreVert />
                  </IconButton>
                </Tooltip>
                </Grid>
            </Grid>
            
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            { 
                NavItems()
                .filter((item) => (item.description !== 'Home' && item.description !== 'Search'))
                .map((item, key) => (
                    <StyledMenuItem key={key}>
                        <ListItemIcon>
                            <Icon fontSize="small">{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={item.description} />
                    </StyledMenuItem>
                )) 
            }    
            </StyledMenu>
        </CardActions>     
    )
}