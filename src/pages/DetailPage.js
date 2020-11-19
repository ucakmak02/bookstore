import React from 'react';
import { useParams } from 'react-router-dom';
/* Import Style */
import { layoutStyle } from '../components/Layout/theme'

export default function DetailPage() {
    const { key } = useParams();
    const styles = layoutStyle();
    return (
        <div className={styles.container}>

        </div>
    )
}
