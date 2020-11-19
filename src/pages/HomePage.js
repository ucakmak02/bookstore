import React from 'react'
import { Link } from 'react-router-dom'
/* Import Style */
import { useStyles } from '../components/Layout/theme'
/* Import Datas */
import { dataBookGenres } from '../datas/bookGenres'
/* Import Component */
import PresentationArea from '../components/PresentationArea/PresentationArea';
import CardList from '../components/Card/CardList';

export default function HomePage() {
    const style = useStyles();
    return (
        <div className={style.container}>
            <PresentationArea
                title='Book Store'
                subTitle='Support Local Bookstores. Shop Online with Bookshop.'
            />
            <CardList
                dataBookGenres={dataBookGenres}
                areaTitle='Book Genres'
                imageHeight={200}
                imageWidth={360}
            />
        </div>

    )
}
