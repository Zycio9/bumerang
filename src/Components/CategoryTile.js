import React, { useRef } from 'react'

import { Typography, Card, CardMedia, CardContent, Button, Collapse } from '@mui/material'
import { NavLink } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import useWindowPosition from '../hooks/useWindwPosition';


const CategoryTile = ({ right, category }) => {
    const tileObject = useRef()
    const checked = useWindowPosition(tileObject);

    const StyledCard = styled(Card)(({ theme }) => ({
        "overflow": "hidden",
        position: 'relative',
        float: 'left',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.2s ease-out',
        ".MuiCardContent-root": {
            maxWidth: '50%',
            [theme.breakpoints.down('md')]: {
                maxWidth: '100%',
            },
        },
        "&:hover .MuiCardMedia-root, &:focus .MuiCardMedia-root": {
            // transform: 'scale(1.05)'

            transition: 'all 0.2s ease-out',
            transform: 'scale(1.02)'
        },
    }));


    const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%",
        transition: 'all 0.2s ease-out',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0, left: 0,
            background: `linear-gradient(transparent, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8))`,
        }
    }));

    return (
        <Collapse ref={tileObject} in={checked} {...(checked ? { timeout: 1000 } : {})} style={{
            ":hover": { cursor: "pointer", backgroundColor: "#ffff9b", color: "#fd0808" },
            "&:before": {
                content: '""',
                display: 'block',
                marginTop: '-400px',
                height: '400px',
                width: '100%',
                background: `linear-gradient(transparent, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8))`,
            }
        }}>

            <NavLink to={category.url} >
                <StyledCard
                    elevation={2}
                    style={{

                        height: "100%",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // transition: "all .5s",
                        backgroundImage: `url(${category.image})`,
                    }}
                >
                    <StyledCardMedia style={{
                        ...category.css,
                    }}
                        media="picture"
                        alt="Contemplative Reptile"
                        image={category.image}
                        title="Contemplative Reptile" />
                    {/* <img src={category.image} alt=""  /> */}
                    <CardContent
                        style={{
                            marginTop: '20%',
                            marginLeft: right ? 'auto' : 0,
                            position: "relative",
                            background: 'transparent',
                            cursor: "",
                        }}>
                        <Typography
                            variant="h3"
                            color="primary">
                            {category.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary">
                            {category.description}
                        </Typography>
                        <Button
                            variant="text"
                            style={{
                                marginLeft: right ? 'auto' : 0
                            }}>
                            Zobacz więcej
                        </Button>
                    </CardContent>
                </StyledCard>
            </NavLink>
        </Collapse>
    )
}

export default CategoryTile