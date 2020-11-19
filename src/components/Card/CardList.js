import React from 'react'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        gap: 20,
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

export default function CardList({ areaTitle, dataBookGenres,imageHeight,imageWidth }) {
    const styles = useStyles();
    return (
        <div>
            <Typography className={styles.text} gutterBottom variant="h4">
                {areaTitle || 'Book Genres'}
            </Typography>
            <div className={styles.container}>
                {dataBookGenres?.map(

                    (bookGenre) => (
                        <Card
                            key={bookGenre.key}
                            name={bookGenre.title}
                            imagePath={bookGenre.image}
                            loggedIn={false}
                            imageHeight={imageHeight}
                            imageWidth={imageWidth}
                        />)
                )}
            </div>
        </div>
    )
}
