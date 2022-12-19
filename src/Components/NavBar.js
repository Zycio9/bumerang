import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, Box, Grid, Divider, Drawer, Typography, IconButton, List, ListItem, ListItemText, ListItemButton, Toolbar, Collapse } from '@mui/material';
import { Menu, ExpandLess, ExpandMore } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

import data from '../data.json'
import Logo from '../images/bumerang_logo_white.png'

import './NavBar.scss'



const drawerWidth = 350;
const headerHeight = 64
const navItems = [
    {
        name: 'Start',
        url: "/",
        id: 'a'
    },
    {
        name: 'O nas',
        url: "onas",
        id: 'b'
    },
    {
        name: 'Oferta',
        url: "oferta",
        id: 'c',
        subItems: true,
    },
    // {
    //     name: 'Wypożyczalnia',
    //     url: "wypozyczalnia",
    //     id: 'd',
    // },
    {
        name: 'Kontakt',
        url: "kontakt",
        id: 'e',
    }]

const StyledLisItem = styled(ListItem)(({ theme }) => ({
    '&, a': {
        transition: 'all 0.2s ease-out'
    },
    '&, a.active_link': {

        color: theme.palette.primary.main,
    },
    '&:hover, &:hover a': {
        color: theme.palette.primary.main,
    }
}));

const StyledMegaMenu = styled('div')(({ theme }) => ({
    '& a:hover': {
        color: theme.palette.primary.main,
    }
    // "overflow": "hidden",
    // ".MuiCardContent-root": {
    //     maxWidth: '50%',
    //     [theme.breakpoints.down('md')]: {
    //         maxWidth: '100%',
    //     },
    // },

}));
console.log(data.categories)

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleClick = () => {
        setOpen(!open);
    };

    const NavLinkStyles = { padding: "5px", paddingLeft: '15px', }
    // menu mobile
    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            {/* <NavLink to='/' >
                <img className="logo" src={Logo} alt="Strona startowa" />
            </NavLink > */}
            <Divider />
            <List style={{ fontSize: '24px' }}>
                {
                    navItems.map((item) => (
                        item.subItems ? (
                            <div key={item.id}>
                                <StyledLisItem onClick={handleClick}>
                                    <NavLink
                                        to={item.url}
                                        style={{
                                            display: 'flex',
                                            alignContent: 'space-between',
                                            width: '100%', ...NavLinkStyles
                                        }}
                                        className={({ isActive }) =>
                                            isActive ? "active_link" : null
                                        }
                                    >
                                        {item.name}
                                        {open ? <ExpandLess style={{ marginLeft: "auto", fontSize: '40px' }} /> : <ExpandMore style={{ marginLeft: "auto", fontSize: '40px' }} />}
                                    </NavLink>
                                </StyledLisItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List>
                                        {
                                            data.categories.map((category) => (
                                                <StyledLisItem key={category.id} style={{ paddingLeft: "45px" }}>
                                                    <NavLink
                                                        to={category.url}
                                                        onClick={handleDrawerToggle}
                                                        style={NavLinkStyles}
                                                        className={({ isActive }) =>
                                                            isActive ? "active_link" : null
                                                        }
                                                    >
                                                        {category.title}
                                                    </NavLink>
                                                </StyledLisItem>
                                            ))
                                        }
                                    </List>
                                </Collapse>
                            </div>

                        ) : (

                            <StyledLisItem key={item.id}>
                                <NavLink
                                    to={item.url}
                                    onClick={handleDrawerToggle}
                                    style={NavLinkStyles}
                                    className={({ isActive }) =>
                                        isActive ? "active_link" : null
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </StyledLisItem>
                        )
                    ))
                }
            </List>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box id="header" sx={{ display: 'flex' }} style={{ height: headerHeight }}>
            <AppBar component="nav" style={{ height: headerHeight }}>
                <Toolbar sx={{ height: '100%', justifyContent: { sm: 'space-between' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <div style={{ paddingRight: { xs: '40px', sm: '0' }, width: "100%" }}>
                        <Typography
                            variant="h6"
                            component="div"
                            style={{
                                display: 'flex'
                            }}
                        >
                            <NavLink to='/' className={"logo-link"}>
                                <img className="logo" src={Logo} alt="Strona startowa" />
                            </NavLink >
                        </Typography>
                    </div>


                    <Box className='z-menu' sx={{ display: { xs: 'none', sm: 'flex' } }} style={{ height: headerHeight }}>
                        <ul >
                            {
                                navItems.map((item) => (
                                    item.subItems ? (
                                        <li key={item.id} className="">
                                            <NavLink to={item.url}
                                                className={({ isActive }) =>
                                                    isActive ? "active_link" : null
                                                }>
                                                {item.name}
                                            </NavLink>
                                            {/* mega menu */}
                                            <StyledMegaMenu className="mega-menu" style={{ top: headerHeight }}>
                                                <Grid
                                                    container
                                                    spacing={4}
                                                    justifyContent="space-between"
                                                    alignItems="stretch"
                                                    className="">
                                                    {
                                                        data.categories.map((category) => (
                                                            <Grid container item
                                                                sm={6}
                                                                md={3}
                                                                key={category.id}
                                                                flexDirection="column"
                                                                className='.mega-menu__tile'>
                                                                <NavLink to={category.url}
                                                                    className={({ isActive }) =>
                                                                        isActive ? "active_link" : null
                                                                    }>
                                                                    <img src={category.menuImage} alt='' />

                                                                    <h2>{category.title}</h2>
                                                                </NavLink>
                                                            </Grid>
                                                        ))
                                                    }
                                                </Grid>
                                            </StyledMegaMenu>
                                        </li>

                                    ) : (

                                        <ListItem key={item.id} disablePadding >
                                            <NavLink to={item.url}
                                                className={({ isActive }) =>
                                                    isActive ? "active_link" : null
                                                }>
                                                {item.name}
                                            </NavLink >
                                        </ListItem>
                                    )
                                ))
                            }
                        </ul>
                    </Box>
                </Toolbar>

            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box >
    );
}



export default Header;
