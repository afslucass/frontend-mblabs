import EventManager from "../../../components/EventManager"
import Footer from "../../../components/Footer"
import Nav from "../../../components/Nav"

export default function AtualizarEvento({ data, token }) {
    return (
        <>
            <Nav isLogged={true} />
            <EventManager mode={'updated'} token={token} data={data} />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events-by-event-id/'+context.query.id, {
        method: 'GET',
    })
    const json = await res.json()

    return {
        props: {
            data: json,
            token: context.req.cookies.token
        }
    }
}