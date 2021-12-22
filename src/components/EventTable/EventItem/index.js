import { addBasePath } from "next/dist/shared/lib/router/router"
import { useRouter } from "next/router"
import { useEffect, useState } from "react/cjs/react.development"

import style from './style.module.sass'

export default function EventItem({ data, index }) {

    const [startDateFormatted, setStartDateFormatted] = useState('')
    const [finishDateFormatted, setFinishDateFormatted] = useState('')
    const router = useRouter()

    useEffect(() => {
        if(data.startDate) {
            setStartDateFormatted(new Date(data.startDate).toLocaleDateString())
        }
        if(data.finishDate) {
            setFinishDateFormatted(new Date(data.finishDate).toLocaleDateString())
        }
    }, [])

    function infoRedirect() {
        router.push('/adm/info/'+data.id)
    }
    function updateRedirect() {
        router.push('/adm/atualizar-evento/'+data.id)
    }

    return (
        <tr className={style.container}>
            <th scope="row">{index}</th>
            <td>{data.name}</td>
            <td>{data.city}</td>
            <td>{data.participants}/{data.participantsLimit}</td>
            <td>{startDateFormatted}</td>
            <td>{finishDateFormatted}</td>
            <td>
                <button onClick={infoRedirect}>Info</button>
            </td>
            <td>
                <button onClick={updateRedirect}>Atualizar</button>
            </td>
        </tr>
    )
}