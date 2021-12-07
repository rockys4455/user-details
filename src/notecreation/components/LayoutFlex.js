import { Box, Button, Checkbox, InputLabel, makeStyles, Select, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'

// form layout using flex

const useStyle = makeStyles(theme => {
    return {
        root: {
            backgroundColor: theme.palette.text.secondary,
            display: 'flex',
            height: '100%',

        },
        drawer: {
            width: 240,
            backgroundColor: 'green'
        },
        main: {
            paddingTop: '2rem',
            backgroundColor: 'pink',
            //width: 'calc(100% - 240px)'
            flexGrow: 1,
        },
        

    }
})
function LayoutFlex(props) {
    const classes = useStyle()    
    return (
        <div className={classes.root}>
            <div className={classes.drawer}>
                drawer
            </div>
            <div className={classes.main}>               
                {props.children}                
            </div>
        </div>
    )
}

export default LayoutFlex
