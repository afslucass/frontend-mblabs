import BackgroundEvent from "../../components/BackgroundEvent"
import EventInfo from "../../components/EventInfo"
import EventPhotos from "../../components/EventPhotos"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

export default function Event({ data }) {
    return (
        <>
            <Nav />
            <BackgroundEvent data={data} />
            <EventInfo data={data} />
            <div style={{ marginBottom: 280 }}></div>
            <EventPhotos data={data} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }) {
    
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events-by-event-id/'+params.id, {
        method: 'GET'
    })
    const json = await res.json()

    return {
        props: {
            data: json
        }
    }
}