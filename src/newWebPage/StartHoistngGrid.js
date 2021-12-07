import { Button, Checkbox, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles(theme=>{
    return {
        
    }
})
const StartHoistngGrid = () => {
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

export default StartHoistngGrid
