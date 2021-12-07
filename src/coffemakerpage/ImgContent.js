import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CoffeCard from './CoffeCard'
import coffeData from './coffeData'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))
const ImgContent = () => {
    const classes = useStyle()
    const getCoffeMakerCard = (coffeMakerObj) => {
        return (
            <Grid item xs={6} sm={3} md={4} key={coffeMakerObj.id}>
                <CoffeCard 
                    {...coffeMakerObj} />
            </Grid>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}  >
                {coffeData.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
            </Grid>
        </div>
    )
}

export default ImgContent
