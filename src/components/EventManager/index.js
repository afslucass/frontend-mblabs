
import { useEffect } from 'react/cjs/react.development'
import CreateEvent from './CreateEvent'
import style from './style.module.sass'
import UpdateEvent from './UpdateEvent'

export default function EventManager({ mode, data, token }) {

    if(mode == 'create') {
        return <CreateEvent data={data} token={token} />
    } else { // mode == 'updade'
        return <UpdateEvent data={data} token={token} />
    }
}