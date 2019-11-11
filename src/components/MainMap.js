import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {flexbox} from "@material-ui/system";
import { Link, ListItem } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    paddingLeft:  20,
    paddingRight: 20,
    display: flexbox,
  }
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { tile } = props;
  console.log(tile);
 
  return (
    <Card className={classes.card}>
      <CardActionArea>
      
          <Button target="_blank" href={tile.URL}>
            <CardMedia
              component="img"
              alt={tile.title}
              height="140"
              image={tile.img}
              title={tile.title}
             />
            </Button>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tile.title}
          </Typography>          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="./resource" size="small" color="primary">
          Edit
        </Button>
        <Button target="_blank" href={tile.More} size="small" color="primary" > 
          Learn More
        </Button>
      </CardActions>
    </Card>
    );}
