import { useEffect } from "react/cjs/react.development"
import Nav from "../../../components/Nav"
import TicketTable from "../../../components/TicketTable"
import { getCookie } from "../../../utils/cookie"

import style from '../../../styles/ticket_list/style.module.sass'

export default function Info({ data, token }) {
    
    return (
        <>
            <Nav isLogged={true} data={data} />
            <div className={`container ${style.container}`}>
                <p>{data.participants}/{data.participantsLimit} ingressos emitidos</p>
                <p>restam {data.participantsLimit-data.participants} ingressos</p>
                <p>taxa de ocupação: {data.participants/data.participantsLimit*100}%</p>
                <p className={style.p}>Todos os Participantes do evento estão listados abaixo, caso queira salvar a lista, pressione o botão a baixo.</p>
            </div>
            <TicketTable data={data} />
        </>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/ticket/'+context.query.id, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+context.req.cookies.token
        }
    })
    const json = await res.json()

    return {
        props: {
            data: json,
            token: context.req.cookies.token
        }
    }
}