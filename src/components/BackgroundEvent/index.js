
import { useEffect } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function BackgroundEvent({ data }) {
    return (
        <div className={`container-fluid ${style.background}`} style={{ backgroundImage: 'url('+ process.env.NEXT_PUBLIC_API_BASE_URL+'/image/'+data.backgroundUrl+')' }}>
            <h1 className={style.event}>{data.name}</h1>
            <h1 className={style.institution}>{data.Institution.name}</h1>
            <div className={style.dark_effect}></div>
        </div>
    )
}