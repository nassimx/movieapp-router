import React from 'react';
import { Grid, Typography, CardMedia, CardContent, CardActions, Button, Card, makeStyles } from '@material-ui/core';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,
    },
    media: {
        height: 500,
    },
});


export const MovieCard = ({ movieCard, handleDelete }) => {

    const classes = useStyles();

    return (
        <div style={{ padding: 30 }}>
            <Grid container
                item
                alignContent="flex-start"
                direction="row"
                justify="center"
                alignItems="center"
                wrap="wrap"
            >
                <Card className={classes.root}  >


                    <CardMedia
                        className={classes.media}
                        image={movieCard.imgSrc}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movieCard.title}
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                value={movieCard.rate}
                                edit={false}
                            />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movieCard.desc}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => handleDelete(movieCard.id)} variant="contained" color="secondary">
                            Delete
                        </Button>
                        <Link to={`/movies/${movieCard.id}`}>
                            <Button >See More</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}




