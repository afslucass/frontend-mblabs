import Image from "next/image";

import style from './style.module.sass'

export default function PhotoItem({ data }) {

    return (
        <div className="col-md-4 col-sm-12">
            <div className={style.img_container}>
                <img src={process.env.NEXT_PUBLIC_API_BASE_URL+'/image/'+data.url} className={style.img} />
            </div>
        </div>
    )
}