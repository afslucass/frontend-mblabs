
import { useRouter } from 'next/router'
import { useEffect } from 'react/cjs/react.development'
import style from '../../../styles/ticket/style.module.sass'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'

export default function Ticket() {

    const ticket = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            let doc = new jsPDF({
                orientation: 'landscape',
                unit: 1
            })
            doc.html(ticket.current, {
                callback: (doc) => {
                    doc.save('ticket.pdf')
                }
            })
        }, 2000);
    }, [])

    const router = useRouter()

    return (
        <div className={style.body} ref={ticket} >
            <div className={style.container}>
                <h1>Ingresso</h1>
                <div>Nome: {router.query.name}</div>
                <div>Código: {router.query.code}</div>
                <div className={style.aviso}>Não se esqueça de apresentar sua Identidade</div>
            </div>
        </div>
    )
}