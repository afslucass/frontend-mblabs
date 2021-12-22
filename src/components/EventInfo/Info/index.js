
import { useEffect, useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function Info({ data }) {

        const [parentalRatingFormatted, setParentalRatingFormatted] = useState('')

        useEffect(() => {
            if(data.parentalRating == 0) {
                setParentalRatingFormatted('Qualquer Idade.')
            } else {
                setParentalRatingFormatted('Recomendado para maiores de '+data.parentalRating.toString())
            }
        })

    return (
        <div className={`col-lg-8 col-md-12`}>
            <div className={style.info}>
                <p>{data.cep}, {data.address}, {data.number}, {data.city} - {data.region}</p>
                <p>De {data.startDate} até {data.finishDate}</p>
                <p>{parentalRatingFormatted}</p>
            </div>
            <p>{data.description}</p>
        </div>
    )
}