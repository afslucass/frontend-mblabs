
import Link from 'next/link'
import { useState } from 'react'
import style from './style.module.sass'

export default function EventItem({ data }) {
    return (
        <div className={`col-md-6 col-sm-12`}>
            <Link href={'/evento/' + data.id} >
                <div className={`${style.event_container}`} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}/image/${data.backgroundUrl})` }} >
                    <h1>{data.name}</h1>
                    <h2>{data.Institution.name}</h2>
                    <h3>{data.city} - {data.region}</h3>
                    <div className={style.dark_effect_container}></div>
                </div>
            </Link>
        </div>
    )
}