import React, { useContext } from 'react'
import { Box, Link } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { layoutStyle } from '../components/Layout/theme'
import { AuthContext } from "../context"
import { books } from '../datas/books'

import CardList from '../components/Card/CardList';

export default function ViewPage() {
    const { key } = useParams();
    const styles = layoutStyle();
    const [isLoggedIn] = useContext(AuthContext);
    return (
        <Box className={styles.container}>
            <CardList
                dataBooks={books ? books[key] ? books[key] : null : null}
                areaTitle='Book List'
                imageHeight={360}
                imageWidth={250}
                routePath={'/detail'}
                routeEditPath={'/edit'}
                loggedIn={isLoggedIn}
            />
            <Link to='/'>Go to Home</Link>
        </Box>
    )
}
