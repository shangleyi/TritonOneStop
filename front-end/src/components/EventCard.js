import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    width: '29%',
    paddingLeft: 20,
    paddingRight: 20,
    display: flexbox,
  },
  media: {
    height: '100%',
    width: '100%',
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { tile } = props;
  return (
    <Card className={classes.card}>
      <Button target="_blank" href={'https://studentevents.ucsd.edu/all/'+`${tile.linkurl}`}>
      <CardActionArea>
        <CardMedia><img style={{height:186, width:330}} src={`${tile.imgURL}`}/></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tile.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tile.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tile.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tile.time}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
      {/* <CardActions>
        <Button size="small" color="primary">
          <LinkIcon />
        </Button>
      </CardActions> */}
    </Card>
    );
  }