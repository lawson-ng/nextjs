import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

const Card = ({id, title, date}) => {
    return (
        <div className={'rounded border p-3 col-6 bg-white shadow text-decoration-none btn'}>
            <Link href={`/posts/${id}`}>
                <div  className="text-start">
                    <h2>{title}</h2>
                    <p className={styles.date}>{date}</p>
                </div>
            </Link>
        </div>
    )
}


export default Card