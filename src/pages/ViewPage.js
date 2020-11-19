import React from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
/* Import Style */
import { layoutStyle } from '../components/Layout/theme'
/* Import Datas */
import { books } from '../datas/books'

import CardList from '../components/Card/CardList';

export default function ViewPage() {
    const { key } = useParams();
    const styles = layoutStyle();
    console.log(key)
    return (
        <div className={styles.container}>
            <CardList
                dataBooks={books? books[key]?books[key]:null:null}
                areaTitle='Book List'
                imageHeight={360}
                imageWidth={250}
                routePath={'/view'}
            />
            <Link to='/'>Go to Home</Link>
        </div>
    )
}
