import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { FormControl, FormHelperText, Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { ProviderLogo, DialogContent, DialogActions, CustomButton, OverviewText, Poster } from './InfoModal.overrides';
import * as toast from '../../helper/toast';

import { movieModalClose, saveMovie } from '../../actions';

MovieInfoModal.propTypes = {
    payload: PropTypes.shape({
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      flatrate: PropTypes.array.isRequired,
      lists: PropTypes.object.isRequired
    }),
    saveMovie: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
}

const MovieInfoModal = (props) => {

  const { poster, title, overview, flatrate } = props.payload;

  let list = '';
  const handleChange = (event) => {
    list = event.target.value;
    //TODO: update Select to state
  };

  const handleAdd = () => {
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
        aria-labelledby="MovieInfoModal" 
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
                <Poster
                  src={poster}
                  alt={title}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h5" paragraph>{title}</Typography>    
                    <OverviewText sx={{marginBottom: "10px"}}>{overview}</OverviewText>
                    <Rating name="movieRating" defaultValue={5} precision={0.5} readOnly />
                    { flatrate ? flatrate.map(provider => (
                        <Tooltip key={provider.provider_id} title={provider.provider_name}>
                          <ProviderLogo
                            src={"https://www.themoviedb.org/t/p/original" + provider.logo_path}
                            alt={provider.provider_name}
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
            labelId="setToListSelect"
            id="setToListSelect"
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