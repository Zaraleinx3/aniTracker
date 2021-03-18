import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    float: 'left',
    marginLeft: '18px',
    marginBottom: '18px',
  },
});

export default function BaseMovieCard(props) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${props.className}`}>
        <ButtonBase onClick={() => {console.log("test")}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.item.title}
                    height="300"
                    image={props.item.cover}
                    title={props.item.title}
                />
            </CardActionArea>
        </ButtonBase>
        { props.buttons }
    </Card>
  );
}
