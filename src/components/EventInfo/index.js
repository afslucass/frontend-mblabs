
import Info from './Info'
import Pay from './Pay'
import style from './style.module.sass'

export default function EventInfo({ data }) {
    return (
        <div className={`container`}>
            <div className={`row`}>
                <Info data={data} />
                <Pay data={data} />
            </div>
        </div>
    )
}