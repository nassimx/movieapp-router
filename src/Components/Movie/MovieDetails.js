import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 35,
        textalign: "center",
    },

});

const MovieDetails = ({ match, movieList }) => {
    const classes = useStyles();
    console.log(match);
    // console.log(movieList);
    const movie = movieList.find(movie => movie.id.toString() === match.params.id)
    return (
        <div>
            <Box mt={5} mb={5}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >

                    <Grid item xs={3}>

                    </Grid>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                {movie.title}
                            </Typography>
                            <Typography>
                                <iframe width="1280" height="720" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Typography>
                            <Typography variant="body1" >
                                <br />
                                {movie.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </div>
    )
}

export default MovieDetails
