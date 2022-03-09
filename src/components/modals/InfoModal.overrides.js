import { styled } from '@mui/material/styles';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';

export const ProviderLogo = styled('img')(({ theme }) => ({
    height: "40px",
    float: "right",
    marginLeft: "5px",
    borderRadius: "4px"
}));

export const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
}))

export const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
    margin: 0,
    padding: theme.spacing(1),
}));

export const CustomButton = styled(MuiButton)(({ theme }) => ({
    minWidth: "40px",
}));

export const OverviewText = styled(Typography)(({ theme }) => ({
    marginBottom: "10px",
}));

export const Poster = styled('img')(({ theme }) => ({
    height: "300px",
}));