
import Link from 'next/link'
import { useEffect, useState } from 'react/cjs/react.development'
import Input from './Input'
import List from './List'
import style from './style.module.sass'

export default function Events() {

    const [query, setQuery] = useState('')
    const [dataUpdated, setDataUpdated] = useState([])

    function queryChageListener(query) {
        setQuery(query)
    }

    useEffect(() => {
        async function queryData() {

            const data = new URLSearchParams()
            data.append('search', query)

            const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events-by-search', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: data,
            })

            const json = await res.json()
            setDataUpdated(json)

        }

        queryData()
    }, [query])

    return (
        <div className={`container ${style.mycontainer}`}>
            <Input onQueryChange={queryChageListener} />
            <List data={dataUpdated} />
        </div>
    )
}