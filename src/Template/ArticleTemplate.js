import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material';

import ArticleList from '../data.json'
function ArticleTemplate() {
    const { categoryId, articleId } = useParams();
    return (
        <>{console.log(categoryId)}
            <Typography variant="text-align: center">Kategoria {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography><br />
            <Typography variant="text-align: center">Artykuł {articleId.charAt(0).toUpperCase() + articleId.slice(1)}</Typography>
        </>
    )
}

export default ArticleTemplate