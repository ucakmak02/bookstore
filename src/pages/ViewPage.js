import React from 'react'
import Box from '@material-ui/core/Box';
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
        <Box className={styles.container}>
            <CardList
                dataBooks={books? books[key]?books[key]:null:null}
                areaTitle='Book List'
                imageHeight={360}
                imageWidth={250}
                routePath={'/detail'}
                routeEditPath={'/edit'}
                loggedIn={true}
            />
            <Link to='/'>Go to Home</Link>
        </Box>
    )
}
