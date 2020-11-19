import React from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from '../components/Layout/theme'
import PresentationArea from '../components/PresentationArea/PresentationArea';

export default function HomePage() {
    const style = useStyles();
    return (
        <div className={style.container}>
            <PresentationArea
                title='Book Storage'
                subTitle='Support Local Bookstores. Shop Online with Bookshop.'
            />
            <Link to='/view'>Go to View Page</Link>

        </div>

    )
}
