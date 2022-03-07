import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import { Assignment, Pause, MoreVert} from '@mui/icons-material';

import { useStyles, AccordionSummaryStyle, DialogContent, DialogActions } from '../../styles/seriesInfoModalStyles';
import * as toast from '../../helper/toast';

import { seriesModalClose, saveSeason } from '../../actions';

function SeriesInfoModal(props) {
  const classes = useStyles();
  
  const { poster, title, overview, genres, seasons, flatrate } = props.payload;

  const handleAdd = (event) => {
    console.log("hier");
  }

  return (
    <div>
      {/* onClose in Dialog Element: Background Click*/ }
      <Dialog 
        onClose={props.closeModal} 
        aria-labelledby="customized-dialog-title" 
        open={props.open}
        fullWidth={true}
        maxWidth={'md'}
        PaperProps={{
          style: {
            backgroundColor: "rgb(0 0 0)",
          },
        }}S
      >
        <DialogContent dividers className={classes.overflowTop}>
          <Grid container spacing={3}>
            <Grid item>
                <img
                  src={poster}
                  alt={title}
                  className={classes.cover}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs className={classes.descriptionBlock}>
                    <Typography variant="h5" paragraph>{title}</Typography>    
                    <Typography paragraph className={classes.description}>
                      { overview === "" ? 'Keine Beschreibung vorhanden.' : overview}
                    </Typography>
                      { genres ? genres.map(genre => (
                        <Chip key={genre.id} label={genre.name} className={classes.chip} />
                      )): ''}
                      <br />
                      { /* TODO: add Rating */ }
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    { flatrate ? flatrate.map(provider => (
                        <Tooltip key={provider.provider_id} title={provider.provider_name}>
                          <img
                            src={"https://www.themoviedb.org/t/p/original" + provider.logo_path}
                            alt={provider.provider_name}
                            className={classes.providerLogo}
                          />
                      </Tooltip>
                    )): ''}
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </DialogContent>

        <DialogContent dividers className={classes.scrollbar}>
          <Grid container spacing={3}>
            <Grid item className={classes.fullWidth}>
              { seasons ? seasons.map(season => (
                <Accordion key={season.season_number}>
                  <AccordionSummaryStyle
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="season"
                    id={season.season_number}
                  >
                    <FormControlLabel
                          aria-label="Acknowledge"
                          onClick={(event) => event.stopPropagation()}
                          onFocus={(event) => event.stopPropagation()}
                          control={<Checkbox />}
                          label={`${season.season_number}: ${season.name}`}
                    />
                   
                      <Rating name="half-rating-read" defaultValue={0} precision={0.5} className={classes.seasonRating} readOnly />
                  
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup variant="text" aria-label="text button group">
                        <Tooltip title="Auf Todo setzen">
                          <IconButton aria-label="todo" onClick={() => {props.saveItem("todo")}}>
                              <Assignment />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Auf Warten setzen">
                          <IconButton aria-label="waiting" onClick={() => {props.saveItem("waiting")}}>
                              <Pause />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Optionen">
                          <IconButton aria-label="options" onClick={() => {console.log("options")}}>
                              <MoreVert />
                          </IconButton>
                        </Tooltip>
                      </ButtonGroup>
                    </Box>
                  </AccordionSummaryStyle>
                  <AccordionDetails>
                    <div className={classes.fullWidth}>
                        { season.episode_count ? [...Array(season.episode_count)].map((e,i) => (
                          <div className={classes.episode} key={i}>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': i }}
                              />
                              <span id={i}>{i + 1}</span>
                          </div>
                        )): ''}

                    </div>
                  </AccordionDetails>
                </Accordion>
              )): ''}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" autoFocus onClick={props.closeModal}>
            X
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapStateToProps = (state) => ({
    payload: state.seriesModal.payload,
    open: state.seriesModal.open,
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(seriesModalClose())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SeriesInfoModal);