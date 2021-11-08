import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

export const useStyles = makeStyles((theme) => ({
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

export const AccordionSummaryStyle = withStyles({
    root: {
      backgroundColor: '#303030',
      expanded: {
        margin: 0,
      },
    },
    content: {
      margin: 0,
    },
})(AccordionSummary);
  
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