
import { useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function Input({ onQueryChange }) {

    function queryHandler(e) {
        onQueryChange(e.target.value)
    }

    return (
        <div id='searchEvent' style={{ marginRight: 10, marginBottom: 50 }}>
            <input type={'text'} placeholder='O que você procura?' onChange={queryHandler} />
        </div>
    )
}