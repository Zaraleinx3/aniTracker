import React from 'react';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { Assignment, Pause, MoreVert } from '@mui/icons-material';

export default function Search(props) {
    return (
        <CardActions>
            <Grid container>
                <Grid item xs={4}>
                    <Tooltip title="Auf Todo setzen">
                        <IconButton aria-label="todo" onClick={() => { props.saveItem("todo") }}>
                            <Assignment />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Auf Warten setzen">
                        <IconButton aria-label="waiting" onClick={() => { props.saveItem("waiting") }}>
                            <Pause />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Optionen">
                        <IconButton aria-label="options" onClick={() => { console.log("options") }}>
                            <MoreVert />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </CardActions>
    )
}