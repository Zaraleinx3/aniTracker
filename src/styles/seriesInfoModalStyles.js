import { makeStyles, withStyles } from '@mui/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiButton from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const useStyles = makeStyles((theme) => ({
    root: {
      margin: 0,
      maxHeight: '22rem',
      padding: theme.spacing(2),
    },
    cover: {
      height: '300px',
    },
    fullWidth: {
      width: '100%',
    },
    descriptionBlock: {
      maxHeight: '20rem',
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
      margin: "auto 0",
      display: "flex",
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
    episode: {
      display: 'inline-block',
      width: '8%',
      border: '2px',
      borderRadius: '10px',
      paddingRight: '7px',
      paddingLeft: '7px',
      marginRight: '5px',
      marginBottom: '5px',
      backgroundColor: '#0f0f0f'
    },
    overflowTop: {
      overflow: 'hidden',
      height: '22rem',
      minHeight: '22rem',
      maxHeight: '22rem',
    },
    list: {
      padding: 0,
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

export const AccordionSummaryStyle = styled((props) => (
  <MuiAccordionSummary 
  {...props}  
  expandIcon={<ExpandMoreIcon />}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .03)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
  
export const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiDialogContent);
  
export const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
}))(MuiDialogActions);