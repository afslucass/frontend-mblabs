
import Link from 'next/link'
import { useEffect, useState } from 'react/cjs/react.development'
import { getCookie } from '../../utils/cookie'
import style from './style.module.sass'

function NavLogged({ data }) {

    const [name, setName] = useState('')

    useEffect(() => {
        if(data) {
            setName(', '+data.name)
        }
    }, [])

    function logout() {
        document.cookie = 'token=0; path=/'
    }

    return (
        <nav className={`${style.my_navbar} navbar navbar-expand-lg navbar-dark`}>
            <div className='container'>
                <Link href="/adm">
                    <a className={`navbar-brand ${style.logo}`}>MyTicket{name}</a>
                </Link>
                
                <div className={`justify-content-end`} id='navbarNav'>
                    <ul className={`navbar-nav`}>
                        <li className={`nav-item`}>
                            <Link href="/">
                                <a className={`nav-link ${style.my_nav_link}`} onClick={logout}>Sair</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default function Nav({ isLogged, data }) {
    if(isLogged) {
        return (
            <NavLogged data={data} />
        )
    }

    return (
        <nav className={`${style.my_navbar} navbar navbar-expand-lg navbar-dark`}>
            <div className='container'>
                <Link href="/">
                    <a className={`navbar-brand ${style.logo}`}>MyTicket</a>
                </Link>
                
                <div className={`justify-content-end`} id='navbarNav'>
                    <ul className={`navbar-nav`}>
                        <li className={`nav-item`}>
                            <Link href="/#searchEvent">
                                <a className={`nav-link ${style.my_nav_link}`}>Procura um Evento?</a>
                            </Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link href="/login">
                                <a className={`nav-link ${style.my_nav_link}`}>Para Instituições</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}