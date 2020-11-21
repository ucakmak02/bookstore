import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(300),
            height: theme.spacing(50),
        },
        flex: 1,
    },
    paperStyle: {
        backgroundImage: 'url(https://ak.picdn.net/shutterstock/videos/6307541/thumb/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typogStyle: {
        fontFamily: "Roboto",
        fontWeight: 700,
    }
}));

export default function PresentationArea({ title, subTitle }) {
    const style = useStyles();
    return (
        <div className={style.root}>
            <Paper className={style.paperStyle} elevation={3}>
                <Typography className={style.typogStyle} variant="h3" gutterBottom>
                    {title || 'Non Title'}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {subTitle || 'Non Subtitle'}
                </Typography>
            </Paper>
        </div>
    )
}
