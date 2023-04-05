import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Logo from '../images/bumerang_logo_white.png'
import './Footer.scss'

import prow from '../images/prow.jpg'
const Footer = () => {
    const theme = [[useTheme()]];
    return (
        <div id="footer">
            <Grid container justify="center" alignItems="center" spacing={2}>

                <Grid container item className='footer__center' sm={12} md={4} alignContent="center" alignItems="center" direction="column">
                    <Grid item>
                        <a href="geo:37.786971,-122.399677;u=35"><Typography className='address' style={{ textAlign: 'center' }}>Mauryca 27 k. Łasku</Typography></a>
                    </Grid>

                    <Grid item>
                        <a className='tel' itemProp="telephone" href="tel:694 847 867">694 847 867</a>
                    </Grid>

                    <Grid item>
                        <a className='tel' itemProp="telephone" href="tel:669 336 693">669 336 693</a>
                    </Grid>
                </Grid>


                <Grid className='footer__left' container item sm={6} md={4} alignContent="center" direction="column">
                    <img className="logo" src={Logo} alt="Strona startowa" />
                    <Link to={`/regulamin`}
                        style={{ marginTop: '1rem' }}>
                        <Typography variant="body1">Regulamin wypożyczalni</Typography>
                    </Link>
                    <a href="/assets/Rodo-Bumerang.pdf"
                        target="_blank"
                        style={{ marginTop: '1rem' }}>
                        <Typography variant="body1">RODO</Typography>
                    </a>
                </Grid>




                <Grid className='footer__right' container item sm={6} md={4} alignContent="center" alignItems="center" direction="column">
                    <Link to={`/prow`}
                        style={{ marginTop: '1rem' }}>
                        <img src={prow} alt="Program Rozwoju Obszarów Wiejskich na lata 2014-2020" />
                    </Link>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer