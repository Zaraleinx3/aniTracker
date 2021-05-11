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
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';

import { movieModalClose } from '../../actions';
import { movieModal } from '../../reducers/movieModal';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  cover: {
    height: "300px",
  },
  providerLogo: {
    height: "40px",
    float: "right",
    marginLeft: "5px",
    borderRadius: "4px"
  },
  bottomSpacing: {
    marginBottom: "10px",
  },
  fullWidth: {
    width: "100%",
  },
}));

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

function MovieInfoModal(props) {
  const classes = useStyles();

  const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const { poster_path, title, overview, flatrate } = props.payload;
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
        }}
      >
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item>
                <img
                  src={cover}
                  alt={title}
                  className={classes.cover}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h5" paragraph>{title}</Typography>    
                    <Typography className={classes.bottomSpacing}>{overview}</Typography>
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
    payload: state.movieModal.payload,
    open: state.movieModal.open,
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(movieModalClose())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MovieInfoModal);