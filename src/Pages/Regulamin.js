import React from 'react'
import { Typography } from '@mui/material'

import "./Regulamin.scss"

const Regulamin = () => {
    return (
        <>
            <Typography variant='h1' align='center' style={{ marginBottom: '3rem' }}>
                Regulamin wypożyczalni BUMERANG
            </Typography>

            <Typography variant='h2' style={{ marginBottom: '3rem' }} className='paragraf'>
                §1<br />
                Warunki wynajmu sprzętu
            </Typography>
            <Typography variant='h6' component="p" style={{ marginBottom: '3rem' }}>
                1.Podstawą wynajęcia sprzętu jest spisanie umowy wynajmu pomiędzy Wypożyczalnią BUMERANG zwaną w dalszej części WYNAJMUJĄCYM, a osobą lub firmą pożyczającą zwaną w dalszej części NAJEMCĄ.<br />
                2.  Umowa spisywana jest przez WYNAJMUJĄCEGO na podstawie ważnego dokumentu tożsamości ze zdjęciem, na czas określony podany przez NAJEMCĘ. Podpisanie umowy przez NAJEMCĘ jest jednoznaczne z akceptacją i przestrzeganiem Regulaminu Wypożyczalni.<br />
                3. Opłaty za wynajem pobierane są wg cennika obowiązującego w dniu wypożyczenia.<br />
                4. Podczas wypożyczania zostaje pobrana kaucja zwrotna, która jest ewentualnym częściowym zabezpieczeniem dla WYNAJMUJĄCEGO w przypadku wynikłych strat, uszkodzeń, kradzieży lub dewastacji podczas eksploatacji sprzętu. O wysokość kwoty pobieranego depozytu decyduje wartość wypożyczanego sprzętu.<br />
                5. Kaucja zostaje zwracana NAJEMCY bez odsetek po oddaniu do Wypożyczalni sprzętu w stanie niepogorszonym ponad normalne zużycie zgodnie z warunkami umowy.<br />
                6. Wysokość stawki dziennej przy najmie długoterminowym może zostać obniżona i jest ustalana indywidualnie.<br />
                7. Czynsz według stawki dobowej oznacza zwrot przed 24 godzinami. Zdanie maszyny, przyczepy lub sprzętu po upływie 24 godzin powoduje naliczenie kolejnej stawki dobowej.<br />
                8. Weekendy i dni wolne od pracy są również traktowane jako podlegające opłacie za wynajem.<br />
                9. Czynsz jest ustalony za czas wynajmu i nie uwzględnia faktycznego czasu pracy urządzenia, jest obliczany od momentu wypożyczenia do momentu zwrotu sprzętu.<br />
                10. Wypożyczone urządzenia są w pełni sprawne technicznie, nie podlegają amortyzacji ani wykupowi.<br />
                11. Wypożyczalnia nie ponosi odpowiedzialności za skutki uboczne i/lub następstwa awarii urządzenia jak: uszkodzenia ciała, straty materialne, utrata przewidywanych zysków (dochodów, płace zatrudnionych pracowników, niezrealizowanych choć przyjętych zleceń itp.).<br />
                12. Wypożyczalnia nie ponosi odpowiedzialności za szkody wynikłe ze złego użytkowania, zabezpieczenia, zamontowania bagażnika rowerowego lub roweru.<br />
                13. W chwili najmu przyczepy NAJEMCA zobowiązuje się do używania Przedmiotu Najmu (przyczepy) zgodnie z  jego przeznaczeniem oraz zasadami eksploatacji, przez co rozumie się zwłaszcza załadowanie i zabezpieczenie ładunku o masie nieprzekraczającej ładowności przyczepy.<br />
                14. Unieruchomienie Przedmiotu Najmu z winy NAJEMCY powoduje naliczenie opłat za każdą dobę przestoju, a także koszty transportu, naprawy, serwisu itp.<br />
                15. Nie dopuszcza się możliwości użytkowania sprzętu, maszyn, przyczep poza granicami RP.<br />
                16. W przypadku kiedy NAJEMCA opóźni zwrot Przedmiotu Najmu nie uzyskawszy uprzednio pisemnej zgody WYNAJMUJĄCEGO, WYNAJMUJĄCY zawiadomi Policję o kradzieży przedmiotu najmu i obciąży Najemcę kara dodatkową.
            </Typography>


            <Typography variant='h2' style={{ marginBottom: '3rem' }} className='paragraf'>
                §2<br />
                Zobowiązania WYNAJMUJĄCEGO
            </Typography>
            <Typography variant='h6' component="p" style={{ marginBottom: '3rem' }}>
                1. WYNAJMUJĄCY zapewnia, że sprzęt, będący przedmiotem umowy jest w dobrym stanie technicznym, przydatnym do umówionego użytku.<br />
                2. Przed każdym wypożyczeniem sprzętu WYNAJMUJĄCY zapoznaje NAJEMCĘ z instrukcją obsługi oraz bezpiecznym użytkowaniem najmowanego sprzętu.<br />
                3. WYNAJMUJĄCY nie ponosi żadnej odpowiedzialności za wypadki i ewentualne szkody powstałe w czasie użytkowania narzędzi, sprzętu, przyczepy lub innego Przedmiotu Najmu.<br />
                4. WYNAJMUJĄCY  nie ponosi odpowiedzialności, za ewentualne opóźnienia mogące wyniknąć z nieprawidłowej pracy przedmiotu najmu lub jego uszkodzenie przez NAJEMCĘ.<br />
                5. WYNAJMUJĄCY zobowiązuje się do ochrony danych osobowych NAJEMCY i nie przekazywania ich osobom trzecim bez wyraźnej zgody NAJEMCY.<br />
                6. WYNAJMUJĄCY daje możliwość dowozu sprzętu po wcześniejszym zgłoszeniu przez NAJEMCĘ chęci wynajęcia sprzętu oraz ustaleniu indywidualnych warunków dowozu.
            </Typography>


            <Typography variant='h2' style={{ marginBottom: '3rem' }} className='paragraf'>
                §3<br />
                Zobowiązania NAJEMCY
            </Typography>
            <Typography variant='h6' component="p" style={{ marginBottom: '3rem' }}>
                1. NAJEMCA przyjmuje do użytku sprzęt będący własnością WYNAJMUJĄCEGO, z obowiązkiem zwrotu w stanie niepogorszonym.<br />
                2. NAJEMCA oświadcza, że został zapoznany z instrukcją obsługi oraz bezpiecznym użytkowaniem najmowanego sprzętu.<br />
                3. NAJEMCA jest zobowiązany do użytkowania sprzętu zgodnie z jego przeznaczeniem oraz zasadami bezpieczeństwa BHP.<br />
                4. NAJEMCA oświadcza, iż posiada odpowiednie umiejętności, uprawnienia, kwalifikacje do korzystania z przedmiotu najmu oraz zapoznał się z jego instrukcją obsługi.<br />
                5. NAJEMCA zobowiązuje się płacić WYNAJMUJĄCEMU czynsz w wysokości wynikającej z przemnożenia ilości dni najmu i stawki za jedną dobę według obowiązującego cennika. W przypadku zwłoki w płatności, WYNAJMUJĄCY uprawniony jest do żądania ustawowych odsetek.<br />
                6. NAJEMCA zobowiązuje się, iż wynajęty sprzęt będzie użytkował zgodnie z jego przeznaczeniem, nie będzie dokonywał napraw bez wiedzy i zgody WYNAJMUJĄCEGO, nie odda przedmiotu najmu osobie trzeciej do używania lub w podnajem, zabezpieczy sprzęt przed uszkodzeniem, kradzieżą i zniszczeniem.<br />
                7. NAJEMCA zobowiązany jest do używania Przedmiotu Najmu (przyczepy) zgodnie z prawem o ruchu drogowym. Koszty związane z łamaniem prawa o ruchu drogowym obciążają NAJEMCĘ.<br />
                8. Od chwili odbioru sprzętu od WYNAJMUJĄCEGO do momentu jego zwrotu NAJEMCA ponosi odpowiedzialność za jego zaginięcie lub uszkodzenie. Kradzież lub dewastacje NAJEMCA ma obowiązek bezzwłocznie zgłosić organom ścigania.<br />
                9. W razie zaginięcia, utraty lub zniszczenia sprzętu NAJEMCA zobowiązany jest zapłacić WYNAJMUJĄCEMU równowartość jego ceny rynkowej.<br />
                10. Skutki uszkodzeń, awarii i strat powstałe przez nie przestrzeganie w/w instrukcji oraz zasad bhp będą obciążały najemcę.<br />
                11. Odpowiedzialność za szkody wobec osób trzecich powstałe w skutek prac prowadzonych przy użyciu przedmiotu najmu przez NAJEMCĘ ponosi NAJEMCA.<br />
                12. NAJEMCA zrzeka się wszelkich roszczeń wobec WYNAJMUJĄCEGO z tytułu wypadków, poniesionych szkód lub obrażeń powstałych w trakcie korzystania z wypożyczonego sprzętu. NAJEMCA wykorzystuje sprzęt na własną odpowiedzialność.
            </Typography>


            <Typography variant='h2' style={{ marginBottom: '3rem' }} className='paragraf'>
                §4<br />
                Zwrot sprzętu
            </Typography>
            <Typography variant='h6' component="p" style={{ marginBottom: '3rem' }}>
                1. NAJEMCA zobowiązuje się zwrócić przedmiot najmu w przewidywanym dniu zwrotu, podanym na umowie wynajmu, nie później niż do godziny, w której został on pożyczony. W przypadku zwrotu przedmiotu najmu po terminie wygaśnięcia umowy najmu, zostanie naliczony czynsz za każdy dzień zwłoki według obowiązującego cennika.<br />
                2. Zwrócony sprzęt powinien być kompletny, w pełni sprawny, wolny od wszelkich wad i oczyszczony. Oddany sprzęt powinien być w stanie gotowości do dalszej pracy.<br />
                3. Wszelkie ewentualne uszkodzenia NAJEMCA zobowiązany jest niezwłocznie zgłosić WYNAJMUJĄCEMU.<br />
                4. W przypadku zwrotu brudnego przedmiotu najmu, NAJEMCA poniesie koszty mycia według obowiązującego cennika.
            </Typography>


            <Typography variant='h2' style={{ marginBottom: '3rem' }} className='paragraf'>
                §5<br />
                Zerwanie umowy wynajmu
            </Typography>
            <Typography variant='h6' component="p" style={{ marginBottom: '3rem' }}>
                1.Zerwanie umowy następuje w przypadku:<br />
                &emsp;a. samowolnego przedłużenia czasu użytkowania<br />
                &emsp;b. braku rozliczenia za okres przekraczający 7 dni<br />
                &emsp;c. używanie wynajętego sprzętu niezgodnie z przeznaczeniem, instrukcją obsługi i zasadami sztuki.<br />
                2. Zerwanie umowy powoduje rygor natychmiastowego zwrotu wynajętego urządzenia przez NAJMUJĄCEGO oraz zapłatę za powstałe szkody na rzecz WYJAMUJĄCEGO.<br /><br /><br />
                Niniejszy regulamin uznaje się za przyjęty do użytkowana i zaakceptowany przez NAJEMCĘ w momencie podpisania dokumentu i wydania wynajmowanego sprzętu.
            </Typography>
        </ >
    )
}

export default Regulamin