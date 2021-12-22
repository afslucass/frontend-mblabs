
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import style from './style.module.sass'

function ResultsQuery({ query }) {

    const [eventsQueried, setEventsQueried] = useState([])

    useEffect(() => {
        async function queryData() {

            if(query == 0) {
                setEventsQueried([])
                return 
            }

            const data = new URLSearchParams()
            data.append('search', query)

            const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events-by-search', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: data,
            })

            const json = await res.json()

            const list = json.map((element) => <div key={element.id}><Link href={'/evento/'+element.id}>{element.name}</Link></div>)
            setEventsQueried(list)

        }

        queryData()
    }, [query])

    return (
        <div className={`${style.results_container}`}>
            {eventsQueried}
        </div>
    )
}

export default function Carrousel() {

    const [toggleImage, setToggleImage] = useState(0)
    const [query, setQuery] = useState('')
    const [myInterval, setMyInterval] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setToggleImage((value) => {
                if(value>1) {
                    return 0
                } 
                return value+1
            })
        }, 8000)
        setMyInterval(interval)
    }, [])
    useEffect(() => { // Para evitar vazamento de memoria, temos que limpar o setInterval
        clearInterval(myInterval)
    })

    function inputChangeHandler(e) {
        setQuery(e.target.value)
    }

    return (
        <div id="carouselExampleSlidesOnly" className={`carousel slide ${style.my_carousel}`} data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className={`${style['img-'+toggleImage]} ${style.img}`} />
                </div>
                <div className="carousel-item">
                    <div className={`${style['img-'+toggleImage]} ${style.img}`} />
                </div>
                <div className="carousel-item">
                    <div className={`${style['img-'+toggleImage]} ${style.img}`} />
                </div>
            </div>
            <div className='container'>
                <div className={`${style.input_container}`}>
                    <label htmlFor='banner-input'>Bora?</label>
                    <input autoComplete='off' type={'text'} placeholder='Procure por algum evento' id='banner-input' value={query} onChange={inputChangeHandler} />
                    <ResultsQuery query={query} />
                </div>
            </div>
        </div>
    )
}