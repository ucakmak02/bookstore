import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import DetailText from './DetailText';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
    },
}));
export default function DetailBox({data,imageWidth,imageHeight}) {
    const styles = useStyles();
    return (
        <Box className={styles.container}>
            <Card 
                data={data}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                boolText={false}
            />
            <DetailText/>
        </Box>
    )
}
