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
    maxWidth: 345,
    paddingLeft: 20,
    paddingRight: 20,
    display: flexbox,
  },
});

export default function EventCard(props) {
  const classes = useStyles();
  const { array } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={array.title}
          height="140"
          image={`${array.imgurl}`}
          title={array.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {array.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {array.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <DeleteIcon />
        </Button>
        <Button size="small" color="primary">
          <LinkIcon />
        </Button>
      </CardActions>
    </Card>
    );
  }