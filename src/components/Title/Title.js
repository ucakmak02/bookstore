import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#666102',
        margin: 30,
        fontFamily: 'Roboto',
        textDecoration: 'underline',
    }
}));

export default function Title({ title }) {
    const styles = useStyles();
    return (
        <Box>
            <Typography className={styles.text} gutterBottom variant="h4">
                {title || 'Title'}
            </Typography>
        </Box>
    )
}
