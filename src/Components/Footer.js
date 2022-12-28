import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import './Footer.scss'

import prow from '../images/prow.jpg'
const Footer = () => {
    const theme = [[useTheme()]];
    return (
        <div id="footer">
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={6} alignContent="center" alignItems="center" >
                    <h1 style={{ textAlign: 'center' }}>Wypożyczalnia Bumerang</h1>

                </Grid>
                <Grid item xs={6} alignContent="center" alignItems="center">
                    <Link to={`/prow`}
                        style={{ marginTop: '1rem' }}>
                        <img src={prow} alt="Program Rozwoju Obszarów Wiejskich na lata 2014-2020" />
                    </Link>
                    <Typography variant="body1">Regulamin wypożyczalni</Typography>
                    <Typography variant="body1">RODO</Typography>
                    <Typography variant="body1">Co gdzie i jak</Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer