import React from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={10} justify="center">
                <Grid item xs={12} md={4} className={cx(styles.gridItem)}>
                    <Card className={cx(styles.card)}>
                        <CardActionArea>
                            <CardContent className={cx(styles.cardContent)}>
                                <Typography color="textSecondary" gutterBottom className={cx(styles.confirmed)}>
                                    Confirmed
                                </Typography>
                                <Typography variant="h5" className={cx(styles.paddingX)}>
                                    <CountUp start={0} end={confirmed.value} duration={1} separator=","/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={cx(styles.paddingX)}>
                                Number of active cases upto {new Date(lastUpdate).toDateString()}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} className={cx(styles.gridItem)}>
                    <Card className={cx(styles.card)}>
                        <CardActionArea>
                            <CardContent className={cx(styles.cardContent)}>
                                <Typography color="textSecondary" gutterBottom className={cx(styles.recovered)}>
                                    Recovered
                                </Typography>
                                <Typography variant="h5" className={cx(styles.paddingX)}>
                                    <CountUp start={0} end={recovered.value} duration={1} separator=","/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={cx(styles.paddingX)}>
                                Number of recoveries upto {new Date(lastUpdate).toDateString()}
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} className={cx(styles.gridItem)}>
                    <Card className={cx(styles.card)}>
                        <CardActionArea>
                            <CardContent className={cx(styles.cardContent)}>
                                <Typography color="textSecondary" gutterBottom className={cx(styles.deaths)}>
                                    Deaths
                                </Typography>
                                <Typography variant="h5" className={cx(styles.paddingX)}>
                                    <CountUp start={0} end={deaths.value} duration={1} separator=","/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={cx(styles.paddingX)}>
                                    Number of deaths upto {new Date(lastUpdate).toDateString()}
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;