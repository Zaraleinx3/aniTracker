import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiButton from '@material-ui/core/Button';

export const useStyles = makeStyles((theme) => ({
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

export const CustomButton = withStyles((theme) => ({
  root: {
    minWidth: "40px",
  }
}))(MuiButton);

