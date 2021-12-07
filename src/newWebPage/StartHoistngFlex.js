import { Button, Checkbox, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles(theme=>{
    return {
        form: {
            padding: '1rem',

            '& >  *': {
                marginTop: theme.spacing(1),
                width: '100%'
            },
            '& > button[type="submit"]': {
                //backgroundColor: 'red'// high priority
            },
            '& > label': {
                color: theme.palette.common.black
                //backgroundColor: 'red'
            },
            // '& [id="agree-terms"]': {
            //     backgroundColor: 'black'
            //  },  not working

            [theme.breakpoints.up('sm')]: {// full - up to sm
                margin: 'auto',
                width: '30rem'
            },

            //  '&  input, select': { //select all input ele inside form(& - parent)
            //      backgroundColor: 'green'
            //  }, work

        },
        formTerms: {

        },

        signupFormTitle: {
            textAlignLast: 'center',
            fontSize: '1.8rem',
            [theme.breakpoints.up('sm')]: {
                backgroundColor: 'aqua'
            }

        },
        btn: {
            marginTop: theme.spacing(3),
            //media query
            [theme.breakpoints.down('sm')]: {
                backgroundColor: 'orange'
            }
        },
    }
})
const StartHoistngFlex = () => {
    const classes = useStyle()
    const [state, setState] = useState({
        title: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <>
            <Typography className={classes.signupFormTitle} >Signup - form - Flex layout</Typography>
            <form noValidate className={classes.form}>
                <InputLabel htmlFor="title" >Title</InputLabel>
                <Select
                    native
                    value={state.title}
                    onChange={handleChange}
                    label="Title"
                    inputProps={{
                        name: 'title',
                        id: 'title',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={0}>Mr.</option>
                    <option value={1}>Mrs.</option>
                </Select>

                <InputLabel htmlFor="first-name">First-Name</InputLabel>
                <TextField id="first-name" label="first-name" variant="outlined" />
                <InputLabel htmlFor="last-name">Last-Name</InputLabel>
                <TextField id="last-name" label="last-name" variant="outlined" />
                <InputLabel htmlFor="age">Age</InputLabel>
                <TextField id="age" label="age" variant="outlined" type="number" />
                <InputLabel htmlFor="address">Address</InputLabel>
                <TextField id="address" label="address" variant="outlined" />
                <div style={{ display: 'flex', alignItems: 'center' }} >

                    <Checkbox className={classes.formTerms}
                        id="agree-terms"
                        checked={false}
                        onChange={() => { }}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <InputLabel htmlFor="agree">Agree to Terms &amp; Conditions</InputLabel>
                </div>
                <Button variant="contained" type="submit" className={classes.btn}>Default</Button>

            </form>
        </>
    )
}

export default StartHoistngFlex
