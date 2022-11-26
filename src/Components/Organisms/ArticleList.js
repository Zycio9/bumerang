import React, { useState } from 'react'

import { Grid } from '@mui/material'


import ArticleTile from "../Atoms/ArticleTile";
import data from '../../data.json'

// * * * * * * * * * * * * *
// *    Lista kafelków z artykułami - wyświetlane po parametrach
// * * * * * * * * * * * * *

const ArticleList = ({ category }) => {

    return (
        <Grid container spacing={2}>
            {data.equipment.map((article) => (
                category === article.category.toLowerCase() ?
                    (<Grid item key={article.id} marginTop={7} xs={12} md={6} lg={4} xl={3}>
                        <ArticleTile
                            article={article}
                        />
                    </Grid>
                    ) : null
            ))}
        </Grid>
    )
}

export default ArticleList