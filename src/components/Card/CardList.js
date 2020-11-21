import React from 'react'
import { Box } from '@material-ui/core';
import Card from './Card'
import Title from '../Title/TitleBase'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#ffffe6',
    },
}));

export default function CardList({ areaTitle, dataBooks, imageHeight, imageWidth, routePath, routeEditPath, loggedIn }) {
    const styles = useStyles();
    return (
        <Box>
            <Title title={areaTitle} />
            <Box className={styles.container}>
                {dataBooks?.map(
                    (data, index) => (
                        <Card
                            key={index}
                            data={data}
                            loggedIn={loggedIn}
                            boolText={true}
                            imageHeight={imageHeight}
                            imageWidth={imageWidth}
                            routePath={routePath}
                            routeEditPath={routeEditPath}
                        />)
                )}
            </Box>
        </Box>
    )
}
