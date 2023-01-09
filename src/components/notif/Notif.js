import styles from './Notif.module.sass';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from 'react';

export default function ({type, message}) {
    const [visible, setVisible] = useState(true)
    const [fading, setFading] = useState(false)

    const types = {
        success: ['var(--green-1)', <AiOutlineCheck />],
        danger: ['var(--red-1)', <AiOutlineClose />]
    }

    useEffect(() => {
        setTimeout(() => {
            setFading(true)

            setTimeout(() => {
                setVisible(false)
            }, 1000) 
        }, 4000) 
    })

    return (
        <>
            {visible &&
                <div className={[styles.notif, fading ? styles.fading : ''].join(' ')} style={{ backgroundColor: types[type][0] }}>
                    <p>{message}</p>
                    {types[type][1]}
                </div>
            }
        </>
    )
}
  