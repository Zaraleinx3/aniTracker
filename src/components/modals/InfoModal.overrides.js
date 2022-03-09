import { styled } from '@mui/material/styles';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

export const ProviderLogo = styled('img')(({ theme }) => ({
    height: "40px",
    float: "right",
    marginLeft: "5px",
    borderRadius: "4px"
}));

export const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
    overflow: 'hidden',
    height: '22rem',
    minHeight: '22rem',
    maxHeight: '22rem',
    
}))

export const DialogSeasonsContent = styled(MuiDialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
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
}));

export const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
    margin: 0,
    padding: theme.spacing(1),
}));

export const CustomButton = styled(MuiButton)(({ theme }) => ({
    minWidth: "40px",
}));

export const OverviewText = styled(Typography)(({ theme }) => ({
    marginBottom: "10px",
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
}));

export const Poster = styled('img')(({ theme }) => ({
    height: "300px",
}));

export const InfoBlock = styled(Grid)(({ theme }) => ({
    maxHeight: '20rem',
}));

export const Tag = styled(Chip)(({ theme }) => ({
    marginRight: '5px',
    marginBottom: '16px',
}));

export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
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

export const SeasonRating = styled(Rating)(({ theme }) => ({
    margin: "auto 0",
    display: "flex",
}));

export const Episode = styled('div')(({ theme }) => ({
    display: 'inline-block',
    width: '8%',
    border: '2px',
    borderRadius: '10px',
    paddingRight: '7px',
    paddingLeft: '7px',
    marginRight: '5px',
    marginBottom: '5px',
    backgroundColor: '#0f0f0f'
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
        m: 1,
    },
}));