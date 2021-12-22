
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function LoginBox() {

    const router = useRouter()
    const loginForm = useRef(null)
    const [errorMessage, setErrorMessage] = useState('')

    async function submitForm(e) {
        e.preventDefault()

        const data = new URLSearchParams
        data.append('cnpj', loginForm.current[0].value)
        data.append('password', loginForm.current[1].value)
        
        const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/institution/login/', {
            method: 'POST',
            body: data
        })
        const json = await res.json()
        
        if(!res.ok) {
            setErrorMessage(json.errors[0].message)
        } else {
            document.cookie = "token="+json.token+'; path=/';
            router.push('/adm')
        }
    }

    return (
        <div className={style.container}>
            <h1>Login</h1>
            <form onSubmit={submitForm} ref={loginForm}>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <div className="form-group">
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input type="text" className="form-control" name='cnpj' id="cnpj" autoComplete='username' />
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12'>
                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" className="form-control" name='password' id="password" autoComplete='current-password' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <p className={style.error_text}>{errorMessage}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <button className={style.submitButton}>Login</button>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <Link href={'/registro'}>
                            <a>Não possui conta ainda?</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}