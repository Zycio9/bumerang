import * as React from 'react';

import { AppBar, Box, Grid, Divider, Drawer, Typography, IconButton, List, ListItem, ListItemText, ListItemButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { styled, useTheme } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';
import Logo from '../images/bumerang_logo_white.png'





const drawerWidth = 240;
const headerHeight = 64
const navItems = [
    {
        name: 'Start',
        url: "/",
        id: 1
    },
    {
        name: 'O nas',
        url: "onas",
        id: 2
    },
    {
        name: 'Oferta',
        url: "oferta",
        id: 3,
        subItems: [
            {
                name: 'Budowlane',
                url: "oferta/budowlane",
                id: 4,
                img: "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/38/3835602/BOSCH-GSB-550-skos-lewy.jpg"
            },
            {
                name: 'Ogrodowe',
                url: "oferta/ogrodowe",
                id: 5,
                img: "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/38/3835602/BOSCH-GSB-550-skos-lewy.jpg"
            },
            {
                name: 'Przyczepy',
                url: "oferta/przyczepy",
                id: 6,
                img: "https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/38/3835602/BOSCH-GSB-550-skos-lewy.jpg"
            },
        ]
    },
    {
        name: 'Kontakt',
        url: "kontakt",
        id: 7,
    }]



const StyledMegaMenu = styled('div')(({ theme }) => ({
    'a&:hover': {
        backgroundColor: theme.palette.primary.main,
    }
    // "overflow": "hidden",
    // ".MuiCardContent-root": {
    //     maxWidth: '50%',
    //     [theme.breakpoints.down('md')]: {
    //         maxWidth: '100%',
    //     },
    // },

}));


function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.names} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box id="header" sx={{ display: 'flex' }} style={{ height: headerHeight }}>
            <AppBar component="nav" style={{ height: headerHeight, zIndex: 100 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <NavLink to='/' >
                            <img className="logo" src={Logo} alt="Strona startowa" />
                        </NavLink >
                    </Typography>


                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }} style={{ height: headerHeight }}>
                        <ul className='z-menu'>
                            {
                                navItems.map((item) => (
                                    item.subItems ? (
                                        <li key={item.id} className="mega-drop-down">
                                            <NavLink to={item.url}>
                                                {item.name}
                                            </NavLink>
                                            <StyledMegaMenu className="animated fadeIn mega-menu" style={{ top: headerHeight }}>
                                                <div className="mega-menu-wrap">
                                                    {
                                                        item.subItems.map((subItem) => (
                                                            <div key={subItem.id}>
                                                                <NavLink to={subItem.url} className='' style={{ width: '100%', }}>
                                                                    {subItem.name}
                                                                </NavLink >
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </StyledMegaMenu>
                                        </li>

                                    ) : (

                                        <ListItem key={item.id} disablePadding style={{ display: 'inline' }}>
                                            <NavLink to={item.url}>
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
