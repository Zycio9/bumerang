import React, { useEffect, useState, useRef } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Typography, Grid } from '@mui/material';
// import { LightgalleryItem } from "react-lightgallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import data from '../data.json'
import ParametersTable from "../Components/Atoms/ParametersTable";
import ArticleTile from "../Components/Atoms/ArticleTile";
import Page404 from '../Pages/Page404';

import './ArticleTemplate.scss'
import Kalendarz from '../images/kalendarz.png'
// const PhotoItem = ({ image, thumb, group }) => (
//     // <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
//     <LightgalleryItem group={group} src={image} thumb={thumb}>
//         <img src={image} style={{ width: "100%" }} alt="" />
//     </LightgalleryItem>
//     // </div>
// );
function ArticleTemplate() {
    const { categoryId, articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [prevArticle, setPrevArticle] = useState(null);
    const [nextArticle, setNextArticle] = useState(null);
    const [categoryArticles, setCategoryArticles] = useState([]) // lista artykułów danej kategorii - może się przyda, zebrane przy okazji
    const [category, setCategory] = useState([]) // lista artykułów danej kategorii - może się przyda, zebrane przy okazji
    const [validCategory, setValidCategory] = useState(false);
    const [validArticle, setValidArticle] = useState(false);

    const gallery = useRef(null);

    useEffect(() => {
        data.categories.forEach(c => {
            if (c.id.toLowerCase() === categoryId.toLowerCase()) {
                setValidCategory(true);
                setCategory(c)
            }
        });
    }, [categoryId])


    useEffect(() => {

        data.equipment.forEach(a => {
            if (a.id.toLowerCase() === articleId.toLowerCase()) {
                setValidArticle(true);



                let tmpArtlicleList = []
                for (const article of data.equipment) {
                    if (article.category === categoryId) {
                        tmpArtlicleList.push(article)
                    }
                }
                setCategoryArticles(tmpArtlicleList)
                for (const [index, article] of tmpArtlicleList.entries()) {
                    if (article.id === articleId) {
                        setArticle(article)

                        if (!index) { // pierwszy element
                            if (tmpArtlicleList.length > 1) {
                                setPrevArticle(tmpArtlicleList[index + 1])
                                setNextArticle(tmpArtlicleList[index + 2])
                                console.log('a', tmpArtlicleList[index + 2]);
                            } else if (tmpArtlicleList.length === 1) {
                                setPrevArticle(tmpArtlicleList[index + 1])
                                setNextArticle(null)
                            } else {
                                setNextArticle(null)
                                setNextArticle(null)

                            }
                        } else if (index === tmpArtlicleList.length) {// ostatni element
                            if (tmpArtlicleList.length > 1) {
                                setPrevArticle(tmpArtlicleList[index - 1])
                                setNextArticle(tmpArtlicleList[index - 2])
                                console.log('a', tmpArtlicleList[index - 2]);
                            } else if (tmpArtlicleList.length === 1) {
                                setPrevArticle(tmpArtlicleList[index - 1])
                                setNextArticle(null)
                            } else {
                                setNextArticle(null)
                                setNextArticle(null)

                            }
                        } else { // element ze środka

                            setPrevArticle(tmpArtlicleList[index - 1])
                            setNextArticle(tmpArtlicleList[index + 1])
                        }

                        break
                    }
                }
                // todo: znaleźć poprzedni i kolejny artykuł bazując na znalezionym

            }
        });


    }, [articleId]);


    const onImageClick = () => {
        gallery.current.fullScreen()
    }

    return (
        validCategory ?
            (validArticle ?
                <>
                    {article && <Grid container spacing={4} className='articleTemplate'>
                        <Grid item container md={6}>

                            <ImageGallery
                                ref={gallery}
                                items={article.images}
                                infinite={true}
                                showFullscreenButton={false}
                                showThumbnails={true}
                                showIndex={true}
                                showNav={true}
                                thumbnailPosition={'bottom'}
                                additionalClass="article-image-gallery"
                                showPlayButton={false}
                                // onClick={onImageClick}
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
                            <Grid item container sx={{ mb: 16 }} justifyContent='space-between' >
                                <Grid item xs={6} className={'PriceLabel PriceLabel__PricePerDay'}>
                                    <span className='PriceLabel__price'>{article.pricePerDay}</span>
                                    <span className='PriceLabel__name PriceLabel__name--PricePerDay'>brutto / doba</span>
                                </Grid>
                                <Grid item xs={6} className='PriceLabel PriceLabel__deposit'>
                                    <span className='PriceLabel__price'>{article.deposit}</span>
                                    <span className='PriceLabel__name PriceLabel__name--deposit'>kaucja</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <img className="kalendarz" src={Kalendarz} alt="Podgląd kalendarza do rezerwacji" />
                        </Grid>


                        <Grid item>
                            <Typography variant="h1">
                                {article.name}
                            </Typography>
                            <NavLink
                                to={category.url}>
                                <Typography variant="h4" sx={{ mb: 1 }} color="primary" className='categoryLink'>
                                    &raquo;  Kategoria: {category.title}
                                </Typography>
                            </NavLink>
                            <Typography variant="body1" sx={{ mb: 8 }}>
                                {article.description}
                            </Typography>

                            {article.benefits ?
                                <>
                                    <Typography variant="h2" color='primary'>Zalety</Typography>
                                    <ul className='articleTemplate___benefits'>
                                        {article.benefits.map((ben) => (
                                            <li>{ben}</li>
                                        ))}
                                    </ul>
                                </> : null}

                            <ParametersTable data={article.parameters} style={{ marginTop: '3rem' }} />
                        </Grid>
                    </Grid>}

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {(prevArticle || nextArticle) && <Typography variant='h4' sx={{ mb: 4 }}>Inne z kategorii "{categoryId}"</Typography>}

                    {article &&
                        <Grid
                            container spacing={2}
                            justifyContent='space-between'
                            alignItems="stretch"
                            className={'articleTileList'}
                        >
                            {prevArticle && <Grid item md={6}><ArticleTile article={prevArticle} /></Grid>}
                            {nextArticle && <Grid item md={6}><ArticleTile article={nextArticle} /></Grid>}


                        </Grid>
                    }
                </> : <Page404 whatIsWrong='article' />)
            : <Page404 whatIsWrong='category' />
    )
}

export default ArticleTemplate