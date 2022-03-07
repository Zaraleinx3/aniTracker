import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FormControl, FormHelperText, Select, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { useStyles, DialogContent, DialogActions, CustomButton } from '../../styles/movieInfoModalStyles';
import * as toast from '../../helper/toast';

import { movieModalClose, saveMovie } from '../../actions';
import { movieModal } from '../../reducers/movieModal';

function MovieInfoModal(props) {
  const classes = useStyles();

  const { poster, title, overview, flatrate } = props.payload;

  let list = '';
  const handleChange = (event) => {
    list = event.target.value;
    //TODO: update Select to state
  };

  const handleAdd = (event) => {
    if (list === '') {
      toast.error('Es wurde keine Liste ausgewählt.');
    } else {
      let movieWithList = props.payload;
      movieWithList.lists = [list];
      props.saveMovie(movieWithList);
    }

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
        <DialogActions>

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <FormHelperText>Hinzufügen zu ...</FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={list}
            label="Hinzufügen"
            onChange= {handleChange}
          >
            <MenuItem value={""}>-</MenuItem>
            <MenuItem value={"wip"}>Wip</MenuItem>
            <MenuItem value={"todo"}>Todo</MenuItem>
            <MenuItem value={"waiting"}>Warten</MenuItem>
            <MenuItem value={"done"}>Fertig</MenuItem>
            <MenuItem value={"rip"}>Rip</MenuItem>
          </Select>
        </FormControl>

        <CustomButton variant="outlined" onClick={handleAdd}>
            Hinzufügen
        </CustomButton>

          {/*
          <Button autoFocus onClick={() => console.log("Save")} color="primary">
            Save ...
          </Button>
          */}

          <CustomButton variant="outlined" autoFocus onClick={props.closeModal}>
            X
          </CustomButton>
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
    closeModal: () => dispatch(movieModalClose()),
    saveMovie: (movie) => dispatch(saveMovie(movie))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MovieInfoModal);