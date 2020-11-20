import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#666102',
        margin: 30,
        fontFamily: 'Roboto',
        textDecoration: 'underline',
    }
}));

export default function Title({title}) {
    const styles = useStyles();
    return (
        <Box>
            <Typography className={styles.text} gutterBottom variant="h4">
                {title || 'Title'} 
            </Typography>    
        </Box>
    )
}
