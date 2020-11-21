import React from 'react'
import { useLocation } from 'react-router-dom';
/* Import Components */
import { Box } from '@material-ui/core';
import Title from '../components/Title/Title'
import DetailBox from '../components/DetailBox/DetailBox'
/* import DetailText from '../components/DetailBox/DetailText' */

/* Import Style */
import { layoutStyle } from '../components/Layout/theme'

export default function EditPage() {
    const location = useLocation();
    const styles = layoutStyle();
    const sourceData = location.state
    return (
        <Box className={styles.container}>
            <Title title={'Edit Page'} />
            <DetailBox
                data={sourceData}
                boolDisable={false}
                imageWidth={300}
                imageHeight={400}
                isAddProduct={false}
                isButtonActive={true}
            />
        </Box>
    )
}
