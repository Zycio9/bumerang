import { useEffect, useState, useCallback } from 'react'
import { Grid, Box, Container, TextField, Typography, Button, IconButton, InputAdornment, FormControlLabel, Checkbox, Link } from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Contact.scss'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Email } from '@mui/icons-material';
const containerStyle = {
    width: '100%',
    height: '600px'
};

const bumerang = {
    lat: 51.5627325,
    lng: 19.1579440
};

// trochę z boku żeby było widać lepiej trasę
const location = {
    lat: 51.5757325,
    lng: 19.1259440
}
const Contact = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = useState(/** @type google.maps.Map*/(null)) // ten zapis w "komentarzu" w jakiś sposób dostarcza podpowiedzi składni biblioteki

    // const onLoad = useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     // const bounds = new window.google.maps.LatLngBounds(center);
    //     // map.fitBounds(bounds);

    //     setMap(map)
    // }, [])


    const onLoad = map => {
        setMap(map)
    }

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const [formData, setFormData] = useState({ email: "", phone: "", message: "" });
    const [restored, setRestored] = useState(false);
    const [notYetReadyToSubmit, setNotYetReadyToSubmit] = useState(true);
    const [validEmail, setValidEmail] = useState(false);

    const [responseMessage, setResponseMessage] = useState({ response: "", ok: true });


    const saveToLocalStorage = () => {
        localStorage.setItem('form', JSON.stringify(formData));

    }

    // przy pierwszym renderze
    useEffect(() => {
        const LSFormData = JSON.parse(localStorage.getItem('form'));
        console.log(LSFormData);
        if (LSFormData && (LSFormData.email || LSFormData.phone || LSFormData.message)) {
            setRestored(true);
            const tmp = {
                email: LSFormData.email,
                phone: LSFormData.phone,
                message: LSFormData.message

            }
            setFormData(tmp)
        } else {
            setRestored(false);
        }
    }, []);

    // przy wpisywaniu czegoś w imputy
    useEffect(() => {
        saveToLocalStorage()
        if (formData && formData.email && formData.message.length > 20) {
            setNotYetReadyToSubmit(false)
        } else {
            setNotYetReadyToSubmit(true)
        }


        // walidacja maila
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }, [formData])


    useEffect(() => {
        console.log('Restored', restored);
    }, [restored])



    const clear = () => {
        setFormData({ email: "", phone: "", message: "" });
        setRestored(false);
    }


    // uniwersalna funkcja zmieniająca wartość wskazanej właściwości obiektu formData
    const updateInput = async (e, part) => {
        setFormData(prev => {
            return { ...prev, [part]: e.target.value }
        }
        )
    }
    const onSubmit = async () => {
        // console.log(JSON.stringify(formData));

        await makeRequest('mail-send.php', "POST", formData)
            .then(res => {
                console.log(res);
                clear()
                setResponseMessage({ response: res, ok: true })

            })
            .catch(err => {
                console.log(err);
                setResponseMessage({ response: err, ok: false })
            })
    }




    // funkcja pomocnicza, zawierająca kod, który powtarzał się w większości metod
    async function makeRequest(url, method, body) {
        const jsonBody = body ? JSON.stringify(body) : undefined
        console.log(`body`, jsonBody);
        const response = await window.fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        })

        const result = await response.text() // często stosowane response.json()
        return result
    }


    return (
        <Grid container style={{
            // background: ' url("../assets/bumerang-bg.png")',
            backgroundSize: 'cover',
            // marginBottom: '190px'
        }}
            spacing={2}
            // direction="column"
            alignItems="center"
            justifyContent='center'>
            <Grid container item xs={6} sx={{ mb: 4 }}>
                <Typography variant="h1" textAlign="center" width={'100%'}>
                    Napisz do nas
                </Typography>
                {restored ?
                    (<Typography variant="caption" textAlign="center" color="success" width={'100%'}>
                        Przywrócono wcześniej wpisane dane
                    </Typography>) : null}
                <TextField
                    id="email"
                    label="Twój email"
                    type="email"
                    margin="normal"
                    required
                    fullWidth
                    value={formData.email}
                    onChange={(e) => updateInput(e, 'email')}
                />
                <Typography variant='caption' color='error'>{formData.email && !validEmail ? "Nieprawidłowy adres email" : ""}</Typography>
                <TextField
                    id="phone"
                    label="Nr telefonu"
                    type="phone"
                    margin="normal"
                    fullWidth
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    value={formData.phone}
                    onChange={(e) => updateInput(e, 'phone')}
                />
                <TextField
                    id="message"
                    label="Wiadomość"
                    type="message"
                    margin="normal"
                    required
                    fullWidth
                    value={formData.message}
                    multiline
                    rows={6}
                    maxRows={30}
                    onChange={(e) => updateInput(e, 'message')}
                />
                <Grid container item spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={6} >
                        <Button
                            style={{ Width: "100%" }}
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onClick={clear}
                        >
                            Wyczyść
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            style={{ Width: "100%" }}
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={onSubmit}
                            disabled={notYetReadyToSubmit || !validEmail}
                        >
                            Wyślij
                        </Button>
                    </Grid>
                    {/* </Grid> */}
                    <Typography variant='body1'
                        align={'center'}
                        color={responseMessage.ok ? "success" : "error"}
                        sx={{ mb: 5, mt: 5, width: "100%" }}>
                        {responseMessage.response}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item sx={{ mb: 4 }}>
                <Typography variant="h2" textAlign="center" width={'100%'} sx={{ mb: 4 }}>
                    Jak dojechać
                </Typography>
                {
                    isLoaded ? (
                        <GoogleMap
                            // mapContainerStyle={containerStyle}
                            mapContainerClassName='googleMap'
                            center={location}
                            zoom={13.5}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={{ mapId: '15f47afd22cea971' }}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <>
                                <Marker
                                    position={bumerang}
                                    animation='BOUNCE'
                                    // label='Bumerang' // przyjmuje też obiekt MarkerLabel 
                                    title='Wypożyczalnia Bumerang'
                                    zIndex={100}
                                    visible={true}
                                    icon={'https://host231423.xce.pl/mappin.png'}
                                />
                                {/* icon	string | Icon | Symbol | undefined
                            Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. */}


                                <IconButton aria-label="" color='primary' title='Pokaż Bumerang' style={{
                                    // color: 'grey',
                                    zIndex: 10,
                                    right: 0,
                                    bottom: '175px',
                                    margin: '10px',
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    boxShadow: 'rgb(0 0 0 / 30%) 0px 1px 4px -1px',
                                    borderRadius: '2px',
                                    width: '40px',
                                    height: '40px',
                                }}
                                    onClick={() => {
                                        map.panTo(bumerang)
                                    }}>
                                    <CenterFocusWeakIcon />
                                </IconButton>
                            </>
                        </GoogleMap>
                    ) : <></>
                }
            </Grid>
        </Grid >


    )
}

export default Contact