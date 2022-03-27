import React from "react";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import { MoreVert, PlaylistAdd } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import { StyledMenu, StyledMenuItem } from "../../../styles/listStyles";

import NavItems from "../../../mocks/api/navItems";

export const List = () => {
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
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Tooltip title="Optionen">
            <IconButton
              aria-label="options"
              onClick={() => {
                console.log("options");
              }}
            >
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
        {NavItems()
          .filter(
            (item) =>
              item.description !== "Home" && item.description !== "Search"
          )
          .map((item, key) => (
            <StyledMenuItem key={key}>
              <ListItemIcon>
                <Icon fontSize="small">{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.description} />
            </StyledMenuItem>
          ))}
      </StyledMenu>
    </CardActions>
  );
};
