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
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Assignment, Pause, MoreVert} from '@mui/icons-material';

import { 
  ProviderLogo, 
  DialogContent, 
  DialogActions, 
  AccordionSummary, 
  DialogSeasonsContent, 
  OverviewText, 
  Poster, 
  InfoBlock, 
  Tag,
  SeasonRating, 
  Episode,
  ButtonBox
} from './InfoModal.overrides';

import * as toast from '../../helper/toast';

import { seriesModalClose, saveSeason } from '../../actions';

function SeriesInfoModal(props) {
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
                  <InfoBlock item xs>
                    <Typography variant="h5" paragraph>{title}</Typography>    
                    <OverviewText paragraph>
                      { overview === "" ? 'Keine Beschreibung vorhanden.' : overview}
                    </OverviewText>
                      { genres ? genres.map(genre => (
                        <Tag key={genre.id} label={genre.name}/>
                      )): ''}
                      <br />
                      { /* TODO: add Rating */ }
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    { flatrate ? flatrate.map(provider => (
                      <Tooltip key={provider.provider_id} title={provider.provider_name}>
                        <ProviderLogo
                          src={"https://www.themoviedb.org/t/p/original" + provider.logo_path}
                          alt={provider.provider_name}
                        />
                      </Tooltip>
                    )): ''}
                  </InfoBlock>
                </Grid>
              </Grid>
          </Grid>
        </DialogContent>

        <DialogSeasonsContent dividers>
          <Grid container spacing={3}>
            <Grid item sx={{width: '100%'}}>
              { seasons ? seasons.map(season => (
                <Accordion key={season.season_number}>
                  <AccordionSummary
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
                      <SeasonRating name="half-rating-read" defaultValue={0} precision={0.5} readOnly />            
                    <ButtonBox>
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
                    </ButtonBox>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div sx={{width: '100%'}}>
                        { season.episode_count ? [...Array(season.episode_count)].map((e,i) => (
                          <Episode key={i}>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': i }}
                              />
                              <span id={i}>{i + 1}</span>
                          </Episode>
                        )): ''}

                    </div>
                  </AccordionDetails>
                </Accordion>
              )): ''}
            </Grid>
          </Grid>
        </DialogSeasonsContent>
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