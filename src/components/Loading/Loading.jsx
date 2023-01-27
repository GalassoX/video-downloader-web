import React from 'react'
import styles from './Loading.module.css';

const Loading = ({ text }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className={styles.loader}></div>
            {text}
        </div>
    )
}

export default Loading;