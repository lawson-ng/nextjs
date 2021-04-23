import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.css'
import Link from 'next/link'

const Card = ({id, title, date}) => {
    return (
        <div className={styles.card}>
            <Link href={`/posts/${id}`} classN>
                <p>{title}</p>
            </Link>
            <p className={styles.date}>{date}</p>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
}

export default Card