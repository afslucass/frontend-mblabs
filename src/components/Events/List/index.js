
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import EventItem from './EventItem'
import style from './style.module.sass'

export default function List({ data }) {
    
    const list = data.map(event => (
        <EventItem key={event.id} data={event} />
    ))

    return (
        <div >
            <div className='row'>
                {list}
            </div>
        </div>
    )
}