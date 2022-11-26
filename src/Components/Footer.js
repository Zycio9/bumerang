import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';


const Footer = () => {
    const theme = [[useTheme()]];
    return (
        <div id="footer" style={{ borderTop: `2px solid ${theme[0][0].palette.primary.main}` }}>
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={6} alignContent="center" alignItems="center" >
                    <h1 style={{ textAlign: 'center' }}>Wypożyczalnia Bumerang</h1>

                </Grid>
                <Grid item xs={6} alignContent="center" alignItems="center">
                    <Typography variant="body1">Regulamin wypożyczalni</Typography>
                    <Typography variant="body1">RODO</Typography>
                    <Typography variant="body1">Co gdzie i jak</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer