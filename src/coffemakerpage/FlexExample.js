import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { flexbox } from '@material-ui/system';

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.info.light,
        display: 'flex',
        flexDirection: "column"
    },
    rootGird: {
        backgroundColor: theme.palette.info.light,
        display: 'flex'
    },
    btn: {
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    firstDivMain: {
        backgroundColor: green[700],
        flexBasis: 200,

    },
    secondDivMain: {
        backgroundColor: red[700],
        flexGrow: 1
    }
}))

const FlexExample = () => {
    const classes = useStyle();
    return (
        <>
            {/* Container exmaple with flex */}
            <Container className={classes.root} disableGutters >
                <Box className={classes.firstDivMain}>flex: Container Box 1</Box>
                <Box className={classes.secondDivMain}>flex: Container Box 2</Box>
            </Container>

            <br/>
            {/* Box example with flex*/}
            <Box display="flex" p={1} bgcolor="yellow" flexDirection="column" p={0} m={0} >
                <Box className={classes.firstDivMain}>flex: inside Box 1</Box>
                <Box className={classes.secondDivMain}>flex: inside Box 2</Box>
            </Box>

            <br/>
            {/* Grid example */}
            <Grid container direction="column" className={classes.rootGird}>
                <Grid item className={classes.firstDivMain}>
                    flex: Grid item 1
                </Grid>
                <Grid item className={classes.secondDivMain}>
                    flex: Grid item 2
                </Grid>
            </Grid>
        </>
    )
}

export default FlexExample;