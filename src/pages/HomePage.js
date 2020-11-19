import React from 'react'
/* Import Style */
import { layoutStyle } from '../components/Layout/theme'
/* Import Datas */
import { dataBookGenres } from '../datas/bookGenres'
/* Import Component */
import PresentationArea from '../components/PresentationArea/PresentationArea';
import CardList from '../components/Card/CardList';

export default function HomePage() {
    const styles = layoutStyle();
    return (
        <div className={styles.container}>
            <PresentationArea
                title='Book Store'
                subTitle='Support Local Bookstores. Shop Online with Bookshop.'
            />
            <CardList
                dataBooks={dataBookGenres}
                areaTitle='Book Genres'
                imageHeight={200}
                imageWidth={360}
                routePath={'/view'}
            />
        </div>

    )
}
