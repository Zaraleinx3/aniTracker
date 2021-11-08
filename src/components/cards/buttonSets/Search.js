import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { Assignment, Pause, MoreVert} from '@material-ui/icons';

export default function Search(props) {
    return (
        <CardActions>
            <Grid container>
                <Grid item xs={4}>
                    <Tooltip title="Auf Todo setzen">
                        <IconButton aria-label="todo" onClick={() => {props.saveItem("todo")}}>
                            <Assignment />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Auf Warten setzen">
                        <IconButton aria-label="waiting" onClick={() => {props.saveItem("waiting")}}>
                            <Pause />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip title="Optionen">
                        <IconButton aria-label="options" onClick={() => {console.log("options")}}>
                            <MoreVert />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </CardActions>     
    )
}