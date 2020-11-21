import React ,{createContext }from 'react'
import Box from '@material-ui/core/Box';
/* import Container from '@material-ui/core/Container'; */
/* Import Style */
import { layoutStyle } from '../components/Layout/theme'
/* Import Datas */
import { dataBookGenres } from '../datas/bookGenres'
/* Import Component */
import PresentationArea from '../components/PresentationArea/PresentationArea';
import CardList from '../components/Card/CardList';

export const HomeContext  = createContext();
const ContextData = {
    dataBooks: dataBookGenres,
    areaTitle:'Book Genres',
    imageHeight:200,
    imageWidth:360,
    routePath:'/view'
  };
export default function HomePage() {
    const styles = layoutStyle();
    return (
        <Box className={styles.container}>
            <HomeContext.Provider value={ContextData}>
                <PresentationArea
                    title='Book Store'
                    subTitle='Support Local Bookstores. Shop Online with Bookshop.'
                />
                <CardList
                    dataBooks={dataBookGenres}
                    areaTitle='Book Genres'
                    imageHeight={200}
                    imageWidth={360}
                    routePath={'/view'}
                />
            </HomeContext.Provider>
        </Box>

    )
}
