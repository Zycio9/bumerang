import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';
import ArticleList from '../Components/Organisms/ArticleList'
import Page404 from '../Pages/Page404';
import data from '../data.json'

function CategoryTemplate() {
    const { categoryId } = useParams();
    const [valid, setValid] = useState(false);

    useEffect(() => {
        data.categories.forEach(c => {
            if (c.title.toLowerCase() === categoryId.toLowerCase()) {
                setValid(true);
            }
        });
    }, [categoryId])


    return (
        valid ? <>{console.log(categoryId)}
            <Typography variant="text-align: center">Kategoria {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography>
            <ArticleList category={categoryId} />
        </> : <Page404 whatIsWrong={'category'} />
    )
}

export default CategoryTemplate