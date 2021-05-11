import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
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

import { seriesModalClose } from '../../actions';
import { seriesModal } from '../../reducers/seriesModal';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  cover: {
    height: '300px',
  },
  fullWidth: {
    width: '100%',
  },
  overflowTop: {
    overflow: 'hidden',
    height: '22rem',
    minHeight: '22rem'
  },
  description: {
    height: '33%',
    overflow: 'auto',
    paddingRight: '5px',
    '&::-webkit-scrollbar': {
        width: '0.3em'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px #303030',
        webkitBoxShadow: 'inset 0 0 6px #303030',
        borderRadius: '5px',
      },
    '&::-webkit-scrollbar-thumb': {
        background: '#424242',
        borderRadius: '5px',
      }
  }, 
  seasonRating: {
    marginTop: "8px",
  },
  chip: {
    marginRight: '5px',
    marginBottom: '16px',
  },
  providerLogo: {
    height: "40px",
    float: "right",
    marginLeft: "5px",
    borderRadius: "4px"
  },
  list: {
    padding: 0,
    backgroundColor: '#303030',

  },
  scrollbar: {
    '&::-webkit-scrollbar': {
      width: '1em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px #303030',
      webkitBoxShadow: 'inset 0 0 6px #303030',
      borderRadius: '5px',
    },
  '&::-webkit-scrollbar-thumb': {
      background: '#424242',
      borderRadius: '5px',
    },
  }
}));

const AccordionSummaryStyle = withStyles({
  root: {
    backgroundColor: '#303030',
    expanded: {
      margin: 0,
    },
  },
  content: {
    margin: 0,
  }
})(AccordionSummary);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function SeriesInfoModal(props) {
  const classes = useStyles();
  
  const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const { poster_path, name, overview, genres, seasons, flatrate } = props.payload;
  const cover = url + poster_path;

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
                  src={cover}
                  alt={name}
                  className={classes.cover}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h5" paragraph>{name}</Typography>    
                    <Typography paragraph className={classes.description}>{overview}</Typography>
                      { genres ? genres.map(genre => (
                        <Chip key={genre.id} label={genre.name} className={classes.chip} />
                      )): ''}
                      <br />
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    { flatrate ? flatrate.map(provider => (
                        <Tooltip title={provider.provider_name}>
                          <img
                            src={url + provider.logo_path}
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
                      { season.episode_count ? [...Array(season.episode_count)].map((e,i) => (
                          <List className={classes.list}>
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
                          </List>
                      )): ''}
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