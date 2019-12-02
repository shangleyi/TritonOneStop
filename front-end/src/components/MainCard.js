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

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { tile } = props;
  //pass back onClick information to Resource.js
  function getComponent(){
    let passResource = [props.tile.id, props.tile.title]
    props.onClick(passResource);
  }

  return (
    <Card className={classes.card}>
      <Button target="_blank" href={`${tile.URL}`}>
        <CardActionArea>

          <CardMedia 
            component="img"
            alt={tile.title}
            height="140"
            image={`${tile.imgURL}`}
            title={tile.title}
          />

          <CardContent >
          
            <Typography gutterBottom variant="h5" component="h2">
              {tile.title}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Button>

      
      <CardActions>
        {/* {tile.user != null?
        <Button size="small" color="primary" onClick={getComponent}> 
          <AddIcon />
        </Button> : null
        } */}
        <Button size="small" color="primary" onClick={getComponent} disabled={tile.userId === null}> 
          <DeleteIcon />
        </Button> 
        <Button size="small" color="primary" href={`${tile.URL}`}>
          <LinkIcon />
        </Button>
      </CardActions>
    </Card>
    );
  }