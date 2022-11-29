import React from 'react'
import { Typography, Card, CardMedia, CardContent, Button, Collapse } from '@mui/material'
import { Link, useParams } from 'react-router-dom';

import './ArticleTile.scss'
// * * * * * * * * * * * * *
// * Prosty pojedynczy kafelek artykułu, z którego przechodzimy na jego stronę z dokładniejszymi informacjami
// * * * * * * * * * * * * *

const ArticleTile = ({ article }) => {
    const { categoryId } = useParams();
    console.log(article)
    return (
        <Card
            elevation={2}
            className={'articleTile'}
        >
            <Link to={`/oferta/${categoryId}/${article.id}`}>
                <div className={'articleTile__media'}

                // media="picture"
                >
                    <img src={article.mainImage}
                        className={'articleTile__mediaImage'}
                        alt={article.name}
                        title={article.name} />
                </div>
            </Link>
            <CardContent className={'articleTile__content'}>
                <Typography
                    variant="h4">
                    {article.name}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary">
                    {article.description}
                </Typography>
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


