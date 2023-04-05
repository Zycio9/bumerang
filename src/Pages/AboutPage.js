import React from 'react'
import { Typography, Button } from '@mui/material';



const About = () => {
    return (
        <div id="about">
            <Typography variant="h1" gutterBottom sx={{ mt: 10 }}>
                Poznajmy się
            </Typography>
            <Typography component="p" gutterBottom>
                Wypożyczalnia Bumerang to nie tylko firma - to pomysł, który powstał z potrzeby serca. Jesteśmy zwykłą, rodzinną firmą, która doskonale rozumie problemy mieszkańców naszej okolicy z dostępnością sprzętu budowlanego i ogrodniczego. Dlatego postanowiliśmy wyjść temu naprzeciw i oferujemy Państwu ogromny wybór urządzeń do różnorodnych prac.
            </Typography>
            <Typography component="p" gutterBottom>
                Samemu wielokrotnie potrzebowaliśmy profesjonalnego i bezpiecznego sprzętu do wykonania pewnych zadań w ogrodzie, w domu lub w pracy, ale niestety nie mieliśmy go pod ręką. To właśnie wtedy narodził się pomysł założenia wypożyczalni Bumerang. Wiemy, że niemal każdy ma jakieś narzędzia, ale przecież nie da się mieć wszystkiego. Niektóre sprzęty potrzebne są tylko raz w roku, przy okazji remontu, przeprowadzki lub porządków w ogrodzie.
            </Typography>
            <Typography component="p" gutterBottom>
                Dlaczego kupować sprzęt, który będziemy używać tylko raz w roku, skoro można go po prostu wypożyczyć? Nasza oferta pozwala na skorzystanie z urządzeń wysokiej jakości w dogodnym dla Państwa terminie, za ułamek ceny nowego sprzętu. Co więcej, nie musisz martwić się o miejsce na przechowywanie sprzętu, który rzadko jest używany.
            </Typography>
            <Typography component="p" gutterBottom>
                Naszym celem jest zaoferowanie Państwu dokładnie tego, czego potrzebujecie, bez zbędnych kosztów i niedogodności. Dzięki temu, że mamy szeroki wybór sprzętu, każdy znajdzie u nas to, czego potrzebuje. Zapraszamy do przejrzenia naszej strony, gdzie przygotowaliśmy pełną ofertę naszych sprzętów.
            </Typography>

            <Typography variant="h2" gutterBottom sx={{ mt: 10 }}>
                Dlaczego warto skorzystać z naszych usług?
            </Typography>
            <Typography variant="p">
                <ul>
                    <li>Znacznie tańsze rozwiązanie niż kupowanie nowego sprzętu, którego potrzebujesz tylko okazjonalnie</li>

                    <li>Możliwość wypożyczenia sprzętu w dogodnym dla Ciebie terminie, bez konieczności przechowywania go przez resztę roku</li>

                    <li>Nasze narzędzia są zawsze w pełni sprawne i gotowe do użycia</li>

                    <li>Zapewniamy fachową obsługę, porady i instrukcje dotyczące sprzętu</li>

                    <li>Zawsze możesz srpawdzić dostępnośc każdego sprzętu w kalendarzu na naszej stronie </li>

                    <li>Wypożyczanie u nas jest szybkie, łatwe i wygodne - zamówienie można złożyć online lub telefonicznie, a my dostarczymy sprzęt pod wskazany adres</li>
                </ul>
            </Typography>
        </div>
    )
}

export default About