import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles, AccordionSummaryStyle, DialogContent, DialogActions } from '../../styles/seriesInfoModalStyles';

import { seriesModalClose } from '../../actions';
import { seriesModal } from '../../reducers/seriesModal';

function SeriesInfoModal(props) {
  const classes = useStyles();
  
  const { poster, title, overview, genres, seasons, flatrate } = props.payload;

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
            backgroundColor: "#212326",
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
                  <Grid item xs>
                    <Typography variant="h5" paragraph>{title}</Typography>    
                    <Typography paragraph className={classes.description}>
                      { overview === "" ? 'Keine Beschreibung vorhanden.' : overview}
                    </Typography>
                      { genres ? genres.map(genre => (
                        <Chip key={genre.id} label={genre.name} className={classes.chip} />
                      )): ''}
                      <br />
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    { flatrate ? flatrate.map(provider => (
                        <Tooltip key={provider.provider_id} title={provider.provider_name}>
                          <img
                            src={provider.logo_path}
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
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FormControlLabel
                          aria-label="Acknowledge"
                          onClick={(event) => event.stopPropagation()}
                          onFocus={(event) => event.stopPropagation()}
                          control={<Checkbox />}
                          label={`${season.season_number}: ${season.name}`}
                    />
                    <Rating name="half-rating-read" defaultValue={0} precision={0.5} className={classes.seasonRating} readOnly />
                  </AccordionSummaryStyle>
                  <AccordionDetails>
                    <div className={classes.fullWidth}>
                      <List className={classes.list}>
                        { season.episode_count ? [...Array(season.episode_count)].map((e,i) => (
                          <ListItem key={i} dense button>
                              <Checkbox
                                edge="start"
                                //checked={checked.indexOf(i) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': i }}
                              />
                            <ListItemText id={i} primary={`Folge ${i + 1}`} />
                          </ListItem>
                        )): ''}
                      </List>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )): ''}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => console.log("Save")} color="primary">
            Save
          </Button>
          <Button autoFocus onClick={props.closeModal} color="primary">
            Close
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