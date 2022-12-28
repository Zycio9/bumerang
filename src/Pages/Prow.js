import React from 'react'
import { Typography, Grid } from '@mui/material'

import ue from '../images/ue.jpg'
import leader from '../images/leader.png'
import drg from '../images/drg.jpg'
import prow from '../images/prow.jpg'


const Prow = () => {
    return (
        <Grid container>
            <Grid container item className='efr' style={{ marginBottom: '3rem' }}>
                <Grid Item xs={3}>
                    <img src={ue} alt="Unia Europejska" />
                </Grid>
                <Grid Item xs={3}>
                    <img src={leader} alt="Leader" />
                </Grid>
                <Grid Item xs={3}>
                    <img src={drg} alt="Dolina rzeki grabi" />
                </Grid>
                <Grid Item xs={3}>
                    <img src={prow} alt="" />
                </Grid>
            </Grid>
            <Grid item style={{ textAlign: 'center', marginBottom: '3rem' }}>

                <Typography variant='h1' style={{ marginBottom: '3rem' }}>
                    „Europejski Fundusz Rolny
                    na rzecz Rozwoju Obszarów Wiejskich:
                    Europa inwestująca w obszary wiejskie”.
                </Typography>
                <Typography variant='h3' >
                    Operacja pn.<br />
                    „Podjęcie działalności w zakresie wynajmu <br />
                    przyczep i bagażników samochodowych, <br />
                    sprzętu ogrodniczego oraz budowlanego”<br />
                    współfinansowana jest<br />
                    ze środków Unii Europejskiej<br />
                    w ramach działania<br />
                    „Wsparcie dla rozwoju lokalnego<br />
                    w ramach inicjatywy LEADER”<br />
                    Programu Rozwoju Obszarów Wiejskich<br />
                    Na lata 2014-2020
                </Typography>
            </Grid >
        </Grid >
    )
}

export default Prow