import Carrousel from "../components/Carrousel";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function EventsTopic() {
    return (
        <>
            <div className={`container`} style={{ marginTop: 80 }}>
                <h1>EVENTOS</h1>
                <h2>Encontre os eventos que mais deseja sem sair de casa. Nossa seleção traz os eventos das principais instituições e faculdades.</h2>
            </div>
        </>
    )
}

export default function Home() {

    return (
        <>
            <Nav />
            <Carrousel />
            <EventsTopic />
            <Events />
            <Footer />
        </>
    )
}