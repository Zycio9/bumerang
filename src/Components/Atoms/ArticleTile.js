import React from 'react'
import { Typography, Card, CardMedia, CardContent, Button, Collapse } from '@mui/material'
import { Link, useParams } from 'react-router-dom';

// * * * * * * * * * * * * *
// * Prosty pojedynczy kafelek artykułu, z którego przechodzimy na jego stronę z dokładniejszymi informacjami
// * * * * * * * * * * * * *

const ArticleTile = ({ article }) => {
    const { categoryId } = useParams();
    console.log(article)
    return (
        <Card
            elevation={2}
            style={{

                height: "100%",
            }}
        >
            <Link to={`/oferta/${categoryId}/${article.id}`}>
                <CardMedia style={{
                    // ...article.css,
                    height: "300px",
                    backgroundSize: 'contain',
                    backgroundColor: 'white'
                }}
                    // media="picture"
                    image={article.mainImage}

                    alt={article.name}
                    title={article.name} />
            </Link>
            <CardContent
                style={{
                    height: 'calc(100% - 300px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                    // marginTop: '20%',
                    // position: "relative",
                    // background: 'transparent'
                }}>
                <Typography
                    variant="h4">
                    {article.name}
                </Typography>
                {/* <Typography
                    variant="body1"
                    color="textSecondary">
                    {article.description}
                </Typography> */}
                <Link to={`/oferta/${categoryId}/${article.id}`}
                    style={{ marginTop: '1rem' }}
                >
                    <Button variant="contained" fullWidth>
                        Zobacz więcej
                    </Button>
                </Link>
            </CardContent>
        </Card >
    )
}

export default ArticleTile


