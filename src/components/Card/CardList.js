import React from 'react'

import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        backgroundColor: '#ffffe6',
    },
    text: {
        color: '#666102',
        marginTop: 30,
        marginBottom: 0,
        padding: 10,
        fontFamily: 'Roboto',
        textDecoration: 'underline',
        backgroundColor: '#ffffb3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
}));

export default function CardList({ areaTitle, dataBooks,imageHeight,imageWidth,routePath }) {
    const styles = useStyles();
    return (
        <div>
            <Typography className={styles.text} gutterBottom variant="h4">
                {areaTitle || 'Title'}
            </Typography>
            <div className={styles.container}>
                {dataBooks?.map(
                    (data,index) => (
                        <Card
                            key={index}
                            dataKey={data.key}
                            name={data.title}
                            imagePath={data.image}
                            loggedIn={false}
                            imageHeight={imageHeight}
                            imageWidth={imageWidth}
                            routePath={routePath}
                        />)
                )}
            </div>
        </div>
    )
}
