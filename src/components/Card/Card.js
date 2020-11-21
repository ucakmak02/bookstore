import React , { useContext } from 'react';
import {HomeContext} from '../../pages/HomePage'
import { makeStyles } from '@material-ui/core/styles';
import {
        Card,
        CardActionArea,
        CardActions,
        CardMedia,
        CardContent,
        Button,
        Typography
      } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    margin: 10
  },
  media: {
    height: 200,
    width: 360,
  },
  tabText: {
    height: 20
  },
  button: {
    marginLeft: 11
  }
});

export default function MediaCard({ data, loggedIn, boolText, imageHeight, imageWidth, routePath,routeEditPath }) {
  const classes = useStyles();
  /* Use Context Example */
  const ContextData = useContext(HomeContext);
  console.log(ContextData)
  return (
    <Card className={classes.container}>
      <Link to={{ pathname: routePath + '/' + data.id, state: data }} params={{ data: data }} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia
            style={{ height: imageHeight || 200, width: imageWidth || 200 }}
            image={data.image}
            title={data.title}
          />
          {boolText ?
            <CardContent
              style={{ width: imageWidth - 32 || 200, color: '#666102' }}
            >
              <Typography gutterBottom variant="subtitle1">
                {data.title}
              </Typography>
            </CardContent> : null}
        </CardActionArea>
      </Link>
      {loggedIn || false ?
        <CardActions className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Link to={{ pathname: routeEditPath + '/' + data.id, state: data }} params={{ data: data }} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<EditOutlinedIcon />}
            >
              Edit
          </Button>
          </Link>
        </CardActions> : null}
    </Card>
  );
}