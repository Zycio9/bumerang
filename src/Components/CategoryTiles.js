import React from 'react'
import { Grid } from '@mui/material';
import data from '../data.json'
import CategoryTile from './CategoryTile'



const CategoryTiles = () => {
    return (
        <Grid container spacing={2} id="cards">
            {data.categories.map((category) => (

                <Grid item key={category.id} marginTop={7} >
                    <CategoryTile
                        category={category}
                        bannerTextSide={category.bannerTextSide}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CategoryTiles




