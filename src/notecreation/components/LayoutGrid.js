import { Box, Button, Checkbox, Grid, InputLabel, makeStyles, Select, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'

// form layout using flex

const useStyle = makeStyles(theme => {
    return {
        rootDiv: {
            flexGrow: 1
        },
        root: {
            backgroundColor: theme.palette.text.secondary,
            //height: '100%',

        },
        drawer: {
            width: 240,
            backgroundColor: 'green'
        },
        mainGrid: {
            //paddingTop: '2rem',
            //backgroundColor: 'pink',
            //width: 'calc(100% - 240px)'
            //flexGrow: 1,
        },


    }
})
function LayoutGrid(props) {
    const classes = useStyle()
    return (
        <Grid container className={classes.root}>
                <Grid item>
                    {props.children}
                </Grid>
            </Grid>
    )
}

export default LayoutGrid
