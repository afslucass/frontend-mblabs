import EventManager from "../../../components/EventManager";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";

export default function CadastrarEvento({ token }) {
    return (
        <>
            <Nav isLogged={true} />
            <EventManager mode={'create'} token={token} />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            token: context.req.cookies.token
        }
    }
}