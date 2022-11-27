import React from 'react'

const Page404 = ({ whatIsWrong = '' }) => {
    return (
        <><h1>Błąd 404</h1>
            <p>Nieprawidłowy adres strony...</p>
            {whatIsWrong === 'category' ? <p>Błędna nazwa kategorii</p> : null}
            {whatIsWrong === 'article' ? <p>Błędna nazwa artykułu</p> : null}
        </>
    )
}

export default Page404