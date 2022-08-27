import React from 'react'
import { Grid } from '@mui/material';
import data from '../data.json'
import CategoryTile from './CategoryTile'
import useWindowPosition from '../hooks/useWindwPosition';



const CategoryTiles = () => {
    const checked = useWindowPosition('header');
    return (
        <Grid container spacing={2} id="cards">
            {data.categories.map((category) => (

                <Grid item key={category.id} marginTop={7} >
                    <CategoryTile
                        checked={checked}
                        category={category}
                        right={category.id % 2 > 0 ? true : false}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CategoryTiles




