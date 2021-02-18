// @flow 
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type Props = {
    name: String,
    description: String,
};

const useStyles = makeStyles({
    root: {
      maxWidth: 120,
      pointer: 'none',
      padding: -10
    },
});

const CardRedondo = (props: Props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardRedondo;