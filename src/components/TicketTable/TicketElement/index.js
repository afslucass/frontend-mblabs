
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function TicketElement({ data, index }) {

    const [date, setDate] = useState()

    useEffect(() => {
        if(data.updatedAt) {
            setDate(new Date(data.updatedAt).toLocaleDateString())
        }
    }, [])

    return (
        <tr className={style.container}>
            <th scope="row">{index}</th>
            <td>{data.name}</td>
            <td>{data.cpf}</td>
            <td className={style.email}>{data.email}</td>
            <td>{date}</td>
            <td className={style.email}>{data.code}</td>
        </tr>
    )
}