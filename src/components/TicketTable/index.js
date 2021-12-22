
import jsPDF from 'jspdf'
import { useEffect, useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import style from './style.module.sass'
import TicketElement from './TicketElement'

export default function TicketTable({ data }) {

    const [list, setList] = useState([])
    const ticketTable = useRef(null)

    useEffect(() => {
        setList(
            data.Tickets.map((element, index) => <TicketElement key={element.id} data={element} index={index+1} />)
        )
    }, [])

    function download() {
        let doc = new jsPDF({
            orientation: 'portrait',
            unit: 0.5
        })
        doc.html(ticketTable.current, {
            callback: (doc) => {
                doc.save('lista de convidados - '+ data.name +'.pdf')
            }
        })
    }

    return (
        <div className={`container ${style.container}`}>
            <button onClick={download} className={`${style.download} btn btn-success`}>Baixar PDF</button>
            <table className={`table table-striped table-hover ${style.table_container}`} ref={ticketTable} >
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Email</th>
                        <th scope="col">Data de Compra</th>
                        <th scope="col">Código</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}