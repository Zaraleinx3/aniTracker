import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles, DialogContent, DialogActions } from '../../styles/movieInfoModalStyles';

import { movieModalClose } from '../../actions';
import { movieModal } from '../../reducers/movieModal';

function MovieInfoModal(props) {
  const classes = useStyles();

  const { poster, title, overview, flatrate } = props.payload;

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
                  src={poster}
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