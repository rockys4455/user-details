

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';



const useStyle = makeStyles({
    btn: {
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    }
})

const Note = () =>{
    const classes = useStyle();
    return (

        <Container maxWidth="sm">
            <Typography variant="h6" component="h1">
                Create a new note
            </Typography>
            
            <Button className={classes.btn} type="submit" variant="outlined">Text</Button>
        </Container>)
}

export default Note;