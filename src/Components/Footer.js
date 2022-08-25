import React from 'react'
import { Grid, Typography } from '@mui/material'
const Footer = () => {
    return (
        <div id="footer">
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={6} alignContent="center" alignItems="center" >
                    <h1 style={{ textAlign: 'center' }}>Footer</h1>

                </Grid>
                <Grid item xs={6} alignContent="center" alignItems="center">
                    <Typography variant="body1">asd</Typography>
                    <Typography variant="body1">asd</Typography>
                    <Typography variant="body1">asd</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer