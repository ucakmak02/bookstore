import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card'
import UploadImageCard from '../Card/UploadImageCard'
import DetailText from './DetailText';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
}));
export default function DetailBox({ data,boolDisable, imageWidth, imageHeight,isAddProduct,isButtonActive }) {
    const styles = useStyles();
    return (
        <Box className={styles.container}>
            {isAddProduct ?
            < UploadImageCard/>:
            <Card
                data={data}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                boolText={false}
            />}
            <DetailText
                data={data}
                boolDisable={boolDisable}
                isButtonActive={isButtonActive}
            />
        </Box>
    )
}
