import { useEffect, useState } from "react/cjs/react.development"
import PhotoItem from "./PhotoItem"

export default function EventPhotos({ data }) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(data.ImagesUrls.map((element) => <PhotoItem data={element} key={element.id} />))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    )
}