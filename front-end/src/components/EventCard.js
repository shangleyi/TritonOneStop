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
import ScriptTag from 'react-script-tag';
import zIndex from '@material-ui/core/styles/zIndex';

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
  var start = tile.calDate + " " + tile.startTime;
  var end = tile.calDate + " " + tile.endTime;

  console.log(tile);
  //console.log(end);

  return (
    <Card className={classes.card}>
      <Button target="_blank" href={'https://studentevents.ucsd.edu/all/'+`${tile.linkurl}`}>
      <ScriptTag isHydrating={false} type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer/>
      <CardActionArea>
        <CardMedia><img style={{height:186, width:330}} src={`${tile.imgURL}`}/></CardMedia>
        <CardContent style={{height:150}}>
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
        <div title="Add to Calendar" class="addeventatc" style={{zIndex:1, textAlign:"center"}}>
              <Typography>Add to Calendar</Typography>
              <span class="date_format">MM/DD/YYYY</span>
              <span class="start">{start}</span>
              <span class="end">{end}</span>
              <span class="timezone">America/Los_Angeles</span>
              <span class="title">{tile.title}</span>
              <span class="location">{tile.location}</span>
            </div>
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