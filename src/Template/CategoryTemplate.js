import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material';

import ArticleList from '../Components/Organisms/ArticleList'
function CategoryTemplate() {
    const { categoryId } = useParams();
    return (
        <>{console.log(categoryId)}
            <Typography variant="text-align: center">Kategoria {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography>
            <ArticleList category={categoryId} />
        </>
    )
}

export default CategoryTemplate