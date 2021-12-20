
import Link from 'next/link'
import style from './style.module.sass'

export default function Nav() {
    return (
        <nav className={`${style.my_navbar} navbar navbar-expand-lg navbar-dark`}>
            <div className='container'>
                <Link href="/">
                    <a className={`navbar-brand ${style.logo}`}>MyTicket</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon light"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end`} id='navbarNav'>
                    <ul className={`navbar-nav`}>
                        <li className={`nav-item`}>
                            <Link href="/">
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