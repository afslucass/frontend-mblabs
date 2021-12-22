
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function Checkout() {
    
    const router = useRouter()
    const { id } = router.query

    const buyTicketForm = useRef(null)
    const [errorMessage, setErrorMessage] = useState('')

    async function submitForm(e) {
        e.preventDefault()

        const data = new URLSearchParams
        data.append('name', buyTicketForm.current[0].value)
        data.append('cpf', buyTicketForm.current[1].value)
        data.append('email', buyTicketForm.current[2].value)
        
        const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/ticket/'+id, {
            method: 'POST',
            body: data
        })
        const json = await res.json()
        
        if(!res.ok) {
            setErrorMessage(json.errors[0].message)
        } else {
            alert('Pagamento Realizado!')
            window.open('/pay/ticket/'+encodeURIComponent(json.code)+'?name='+encodeURIComponent(json.name), 'popup', 'height=400,width=600')
            router.back()
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Comprar Ingresso</h1>
            <form onSubmit={submitForm} ref={buyTicketForm}>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div class="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" class="form-control" name='name' id="nome" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div class="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" class="form-control" name='cpf' id="cpf" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div class="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" class="form-control" name='email' id="email" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <p className={style.error_text}>{errorMessage}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <button className={style.finishButton}>Finalizar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}