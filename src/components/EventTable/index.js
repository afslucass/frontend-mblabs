
import { useEffect, useState } from 'react/cjs/react.development'
import EventItem from './EventItem'
import style from './style.module.sass'

export default function EventTable({ data }) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(
            data.Events.map((element, index) => <EventItem key={element.id} data={element} index={index+1} />)
        )
    }, [data])

    return (
        <div className={`container ${style.container}`}>
            <table className={`table ${style.table_container}`}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Evento</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Ingressos Emitidos/Total</th>
                        <th scope="col">Data de Início (m/d/a)</th>
                        <th scope="col">Data de Término (m/d/a)</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}