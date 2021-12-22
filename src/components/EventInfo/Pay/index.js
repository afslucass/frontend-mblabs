
import Link from 'next/link'
import { useEffect, useState } from 'react/cjs/react.development'
import style from './style.module.sass'

function PayButton({ data }) {
    
    if(data.participants < data.participantsLimit) {
        return (
            <Link href={'/pay/'+data.id}>
                <a className={style.a}>Vamo qVamo!</a>
            </Link>
        )
    } else {
        return <></>
    }
}

export default function Pay({ data }) {

    const [isavailable, setIsavailable] = useState('Disponivel')

    useEffect(() => {
        if(parseInt(data.participants) >= data.participantsLimit) {
            setIsavailable('Indisponivel')
        }
    }, [])

    return (
        <div className={`col-lg-4 col-md-12 ${style.container}`}>
            <h1 className={style.topic}>Curtiu o que Viu??</h1>
            <p className={style[isavailable]}>{isavailable}</p>
            <p className={style.ticket_price_paragraph}>Valor do ingresso: <span className={style.ticket_price}>R$ {data.ticketPrice}</span></p>
            <p className={style.p}>
                Garanta agora o seu ingresso e não
                perca a oportunidade de participar 
                desse evento!
            </p>
            <p className={style.p}>
                É simples, rápido e fácil!
            </p>
            <PayButton data={data} />
        </div>
    )
}