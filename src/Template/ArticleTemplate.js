import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button, Grid } from '@mui/material';
// import { LightgalleryItem } from "react-lightgallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import data from '../data.json'
import ParametersTable from "../Components/Atoms/ParametersTable";



// const PhotoItem = ({ image, thumb, group }) => (
//     // <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
//     <LightgalleryItem group={group} src={image} thumb={thumb}>
//         <img src={image} style={{ width: "100%" }} alt="" />
//     </LightgalleryItem>
//     // </div>
// );
function ArticleTemplate() {
    const { categoryId, articleId } = useParams();

    // const title = "test"

    const [article, setArticles] = useState(null);

    const gallery = useRef(null);
    useEffect(() => {
        setArticles(data.equipment.find(article => article.id === articleId))
    }, []);


    const onImageClick = () => {
        console.log(gallery)
        gallery.current.fullScreen()
    }

    return (
        <> {console.log(article)}
            {article && <Grid container spacing={4}>
                <Grid item md={6} style={{ zIndex: 200 }}>
                    <ImageGallery

                        ref={gallery}
                        items={article.images}
                        infinite={true}
                        showFullscreenButton={false}
                        showThumbnails={true}
                        showIndex={true}
                        showNav={true}
                        thumbnailPosition={'bottom'}
                        additionalClass="app-image-gallery"
                        showPlayButton={false}
                        onClick={onImageClick}
                        useBrowserFullscreen={false}
                    // onImageLoad={this._onImageLoad}
                    // onSlide={this._onSlide.bind(this)}
                    // onPause={this._onPause.bind(this)}
                    // onScreenChange={this._onScreenChange.bind(this)}
                    // slideDuration={parseInt(this.state.slideDuration)}
                    // slideInterval={parseInt(this.state.slideInterval)}
                    // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                    // useWindowKeyDown={this.state.useWindowKeyDown}
                    />
                    {/* <Typography variant="h1">
                        {article.title}
                    </Typography>
                    <PhotoItem image={article.mainImage} group="articlePhotos" />
                    reszta obrazków

                    das
                    <Grid container item spacing={2}>

                        {article.images.map((i, idx) => (
                            <Grid key={idx} item md={3}>
                                <PhotoItem image={i} thumb={i} group="articlePhotos" />
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
                <Grid item md={6}>
                </Grid>
                <ParametersTable data={article.parameters} />
            </Grid>}
            <Typography variant="text-align: center">Kategoria {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography><br />
            <Typography variant="text-align: center">Artykuł {articleId.charAt(0).toUpperCase() + articleId.slice(1)}</Typography>
        </>
    )
}

export default ArticleTemplate