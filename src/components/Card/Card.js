import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useHistory} from 'react-router-dom'

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
  }
});

export default function MediaCard({ dataKey,name, imagePath, loggedIn, imageHeight, imageWidth,routePath }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <CardActionArea onClick = {() => {history.push(routePath+'/'+dataKey)}}>
        <CardMedia
          style={{ height: imageHeight || 200, width: imageWidth || 200 }}
          image={imagePath}
          title={name}
        />
        <CardContent className={classes.tabText}>
          <Typography gutterBottom variant="subtitle1">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {loggedIn ?
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions> : null}
    </Card>
  );
}