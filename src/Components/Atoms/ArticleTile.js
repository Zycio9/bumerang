import React from 'react'
import { Typography, Card, CardMedia, CardContent, Button, Collapse } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom';
// * Prosty pojedynczy kafelek artykułu, z którego przechodzimy na jego stronę z dokładniejszymi informacjami 
const ArticleTile = ({ article }) => {
    const { categoryId } = useParams();
    console.log(categoryId, article);
    return (
        <Card
            elevation={2}
            style={{

                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // transition: "all .5s",
                // backgroundImage: `url(${article.image})`,
            }}
        >
            <NavLink to={`${article.id}`} >
                <CardMedia style={{
                    // ...article.css,
                    height: "300px"
                }}
                    // media="picture"
                    image={article.image}

                    alt={article.name}
                    title={article.name} />
            </NavLink>
            <CardContent
                style={{
                    // marginTop: '20%',
                    // position: "relative",
                    // background: 'transparent'
                }}>
                <Typography
                    variant="h4"
                    color="primary">
                    {article.name}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary">
                    {article.description}
                </Typography>
                {/* <NavLink to={article.url} > */}
                <Button
                    variant="text">
                    Zobacz więcej
                </Button>
                {/* </NavLink> */}
            </CardContent>
        </Card>
    )
}

export default ArticleTile


