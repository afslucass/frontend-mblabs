import Nav from "../../components/Nav"
import { getCookie } from "../../utils/cookie"

import style from '../../styles/adm/style.module.sass'
import Link from "next/link"
import EventTable from "../../components/EventTable"
import Footer from "../../components/Footer"
import { useEffect } from "react/cjs/react.development"

export default function Adm({ institutionData }) {

    return (
        <>
            <Nav isLogged={true} data={institutionData} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <p className={style.p}>Gerencie seus eventos, crie novos, altere as decrições, datas, preços, tudo em um só lugar.</p>
                    </div>
                </div>
                <div className="row">
                    <Link href={'/adm/cadastrar-evento'}>
                        <button className={style.create_event_button}>Cadastrar Evento</button>
                    </Link>
                </div>
            </div>
            <EventTable data={institutionData} />
            <div style={{ marginTop: 100 }} />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    
    const jwtAuthHeader = new Headers()
    jwtAuthHeader.append('Authorization', 'Bearer '+context.req.cookies.token)

    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events-by-institution-id', {
        method: 'GET',
        headers: jwtAuthHeader
    })
    const json = await res.json()

    return {
        props: {
            institutionData: json
        }
    }
}