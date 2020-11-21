import React from 'react'
/* Import Components */
import Box from '@material-ui/core/Box';
import Title from '../components/Title/Title'
import DetailBox from '../components/DetailBox/DetailBox'
/* import DetailText from '../components/DetailBox/DetailText' */

/* Import Style */
import { layoutStyle } from '../components/Layout/theme'

export default function AddProductPage() {
    const styles = layoutStyle();
    return (
        <Box className={styles.container}>
            <Title title={'Add New Book'}/>
            <DetailBox 
                boolDisable={false}
                imageWidth={300} 
                imageHeight={400}
                isAddProduct={true}
                isButtonActive={true}
            />
        </Box>
    )
}
