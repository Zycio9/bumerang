import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';
import ArticleList from '../Components/Organisms/ArticleList'
import Page404 from '../Pages/Page404';
import data from '../data.json'

function CategoryTemplate() {
    const { categoryId } = useParams();
    const [valid, setValid] = useState(false);
    const [category, setCategory] = useState({});

    useEffect(() => {
        data.categories.forEach(c => {
            if (c.title.toLowerCase() === categoryId.toLowerCase()) {
                setValid(true);
                setCategory(c)
            }
        });
    }, [categoryId])

    useEffect(() => {

        console.log(category)
    }, [category])
    return (
        valid ? <>{console.log(categoryId)}
            <Typography variant="h1" color='primary'>{category.title}</Typography>
            <Typography variant="body1" >{category.description}</Typography>
            <ArticleList category={categoryId} />
        </> : <Page404 whatIsWrong={'category'} />
    )
}

export default CategoryTemplate