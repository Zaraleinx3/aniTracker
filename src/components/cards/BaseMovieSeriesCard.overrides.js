import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const AtCard = styled(Card)(({ theme }) => ({
    maxWidth: 200,
    float: 'left',
    marginLeft: '18px',
    marginBottom: '18px',
    background: '#1e1e1e',
}));