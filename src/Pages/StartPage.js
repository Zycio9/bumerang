import React from 'react'
import { Typography, Button, Grid, Card, CardContent, Stack, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryTiles from "../Components/CategoryTiles";

import Banner from '../Components/Banner';
import { WorkspacePremium, PhoneEnabled, EmojiEmotions, Chair, Star, Person, Plumbing, Handshake, AccessTime, Facebook, Email, CalendarMonth } from '@mui/icons-material';


const Start = () => {
    return (
        <>
            <Grid item container sx={{ mb: 5, mt: 16 }} justifyContent='space-between' spacing={2}>

                <Grid item >
                    <Typography id="welcome" variant="h1" gutterBottom>
                        Wypożyczalnia  Bumerang - rozwiązujemy Twoje problemy
                    </Typography>

                    <Typography variant="p" gutterBottom>
                        Szukasz sposobu, aby ułatwić sobie pracę? Wypożyczalnia Bumerang jest tutaj, aby Ci pomóc! <br />
                        Planujesz porządki w ogrodzie, ale brakuje Ci odpowiedniego narzędzia? <br />
                        A może szukasz sprzętu budowlanego, który pomoże Ci wykończyć swój dom lub mieszkanie? <br />
                        Bez względu na to, jakie są Twoje potrzeby, wypożyczalnia Bumerang ma dla Ciebie rozwiązanie.<br /><br /><br />
                        W swojej ofercie posiadamy <strong>szeroką gamę produktów</strong>, w tym przyczepy samochodowe, lawety, przyczepy do przewozu motocykli, bagażniki samochodowe na rowery, a także sprzęt ogrodniczy, taki jak wertykulatory, glebogryzarki, rębaki do gałęzi, kosiarki, piły spalinowe, podkaszarki, nożyce do żywopłotu, dmuchawy. <br />
                        Dodatkowo, posiadamy sprzęt budowlany, taki jak zagęszczarki, wiertnice, nagrzewnice, piły do betonu, szlifierki do gładzi i wiele więcej. Wszystko, czego potrzebujesz, znajdziesz w naszej wypożyczalni.
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{ mb: 10 }}>
                    <Typography variant="p" gutterBottom>

                        Wypożyczając sprzęt z naszej wypożyczalni, możesz być pewien, że otrzymasz <strong>nowoczesny i wysokiej jakości sprzęt. Nasze urządzenia są nowe, zadbane i w pełni sprawne</strong>, aby zapewnić Ci najlepsze wrażenia i oszczędzić Twój czas.
                        <br /><br />
                        Wypożyczalnia Bumerang jest <strong>czynna przez całą dobę</strong>, bez względu na to, która jest godzina. Bez względu na to, czy potrzebujesz sprzętu w środku nocy, czy też wczesnym rankiem, jesteśmy tutaj, aby Ci pomóc. Aby uzyskać poradę lub odpowiedź na pytania, skontaktuj się z nami pod jednym z numerów telefonu, na naszej stronie na Facebooku lub za pośrednictwem poczty elektronicznej:
                        <br />
                        <br />
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    icon={<PhoneEnabled />}
                                    component='a'
                                    label="694 847 867"
                                    variant="outlined"
                                    className='chip'
                                    itemProp="telephone"
                                    href="tel:694 847 867"
                                />
                                <Chip
                                    icon={<PhoneEnabled />}
                                    component='a'
                                    label="669 336 693"
                                    variant="outlined"
                                    className='chip'
                                    itemProp="telephone"
                                    href="tel:669 336 693"
                                />

                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    icon={<Facebook />}
                                    component='a'
                                    className='chip'
                                    label="@WypozyczalniaBumerang"
                                    variant="outlined"
                                    href="https://facebook.com/WypozyczalniaBumerang/"
                                    target="_blank"
                                />
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    icon={<Email />}
                                    component='a'
                                    label="kontakt@wypozyczalnia-bumerang.pl"
                                    variant="outlined"
                                    className='chip'
                                    href="mailto:kontakt@wypozyczalnia-bumerang.pl"
                                />

                            </Stack>
                        </Stack>

                        <br /><br />
                    </Typography>
                </Grid>

                <Grid item md={6}>
                    <Typography variant="p">
                        <img src='./assets/kategorie/budowlane.webp' alt='Narzedzia których nie musisz mieć na własność - wypożycz tylko kiedy ich potrzebujesz'
                            className='imgMainP' />
                    </Typography>
                </Grid>
                <Grid item sx={{ mb: 5 }}>
                    <Typography variant="h2" gutterBottom>
                        Wygodne rezerwowanie
                    </Typography>
                    <Typography variant="p">
                        Prócz rezerwacji telefonicznej, która jest standardem umożliwiamy <strong> rezerwację online na naszej stronie!</strong> Jeśli wolisz, możesz przejrzeć dostępność interesującego Cię sprzętu i zarezerwować go na dostępny termin - wszystko dostępne zawsze i wszędzie, o ile tylko masz dostęp do internetu. Wszystko dla Twojej wygody.
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h2" gutterBottom>
                        W swojej ofercie posiadamy:<br />
                    </Typography>
                    <Typography variant="p">

                        - przyczepy samochodowe<br />
                        - lawety<br />
                        - przyczepy do przewozu motocykli<br />
                        - bagażniki samochodowe na rowery<br />
                        - sprzęt ogrodniczy (wertykulatory, glebogryzarki, rębaki do gałęzi, kosiarki, piły spalinowe, podkaszarki, nożyce do żywopłotu, dmuchawy)<br />
                        - sprzęt budowlany (zagęszczarki, wiertnice, nagrzewnice, piły do betonu, szlifierki do gładzi)<br />
                        i wiele, wiele innych...<br />
                        <br />
                        Wybierz to, czego potrzebujesz - możemy dostarczyć wybrany sprzęt pod wskazany adres lub możesz odebrać go osobiście.<br />
                        Nowoczesny, wysokiej jakości sprzęt - posiadamy nowe, zadbane i w pełni sprawne urządzenia.<br /><br />
                        Co ważne, przeglądając naszą pełną ofertę sprzętów online prócz zaoszczędzonego czasu dowiesz się też ile kosztuje wypożyczenie każdego ze sprzętów oraz ile wynosi kaucja. Jeśli jesteś zdecydowany kilkoma kliknięciami możesz zarezerwować produkt. To takie proste!<br /><br />
                        Zobacz sam co dla Ciebie mamy:
                        <Link to={'/oferta'}>
                            <button className='offer-button'>Zobacz ofertę</button>
                        </Link>
                    </Typography>
                </Grid>


                <Grid container item className="articleTileList" justifyContent="center" spacing={5} sx={{ mb: 8, mt: 8 }}>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <WorkspacePremium sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Profesjonalna obsługa klienta
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Obsłużymy cię aż się zdziwisz ;)
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <AccessTime sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Zawsze dostępni
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Pomożemy Ci bez względu na porę czy dzień
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <CalendarMonth sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Zarezerwuj online
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Jeśli wolisz możesz sprawdzić dostępność każdego sprzętu i zarezerwować go przez stronę
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <PhoneEnabled sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Fachowe doradztwo
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Pomożemy dobrać najodpowiedniejszy sprzęt
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <EmojiEmotions sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Przyjazna atmosfera
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Jakoś się dogadamy
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <Chair sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Wygoda i bogactwo możliwości
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Dostosujemy się do Ciebie
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <Star sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Wysoka jakość
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Najlepszy sprzęt w najlepszej cenie
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <Plumbing sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Nowoczesny sprzęt
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    Pracujemy z najlepszym sprzętem znanych marek
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >

                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <Person sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Indywidualne podejście do każdego klienta
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    jesteśmy tu dla Ciebie
                                </Typography>
                            </CardContent>
                        </Card >
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="articleTileList">
                        <Card
                            elevation={0}
                            className={'articleTile'}
                            sx={{ borderRadius: '50%' }}
                        >
                            <CardContent className={''} sx={{ textAlign: 'center' }}>
                                <WorkspacePremium sx={{ fontSize: '15rem' }} />
                                <Typography
                                    variant="h3" align='center'>
                                    Atrakcyjne warunki wynajmu sprzętu
                                </Typography>
                                <Typography
                                    variant="overline"
                                    color="textSecondary">
                                    U nas nie przepłacisz
                                </Typography>
                            </CardContent>
                        </Card>
                        <br />
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h2" gutterBottom>
                        Wybierz to, co dla Ciebie najlepsze
                    </Typography>
                    <Typography variant="p" gutterBottom>
                        Oferujemy profesjonalną obsługę klienta, fachowe doradztwo, przyjazną atmosferę oraz wygodę i bogactwo możliwości, aby zagwarantować Ci doskonałe doświadczenie wypożyczenia sprzętu. Nasza wypożyczalnia stawia na indywidualne podejście do każdego klienta i oferuje atrakcyjne warunki wynajmu sprzętu.

                        Nie zwlekaj dłużej i skorzystaj z usług wypożyczalni Bumerang, aby uzyskać najlepszy sprzęt na rynku.
                    </Typography>
                </Grid>
            </Grid>
        </>

    )
}

export default Start