import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function TitleBase({ title }) {
    const styles = useStyles();
    return (
        <Box>
            <Typography className={styles.text} gutterBottom variant="h4">
                {title || 'Title'}
            </Typography>
        </Box>
    )
}
