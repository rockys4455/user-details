import React from 'react'
import { Container, Typography, Button, styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors';

const useStyle = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex'

    },
    btndiv1: {
        flexGrow: 1,
    }

}))

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
    },
}));
const Create = () => {
    const classes = useStyle()
    return (
        <Container>
            <div className={classes.root}>
                <div className={classes.btndiv1}>
                    <Button variant="contained" className={classes.btn1}>Default</Button>
                </div>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
            </div>

            <Root>
                <Typography>{'down(sm): red'}</Typography>
                <Typography>{'up(md): blue'}</Typography>
                <Typography>{'up(lg): green'}</Typography>
            </Root>

        </Container>


    )
}

export default Create;