import { makeStyles } from '@material-ui/core/styles';

export const layoutStyle = makeStyles((theme) => ({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15
    }
}));