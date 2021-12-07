import { Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types';
import React from 'react'

const useStyles = makeStyles({
    root: {backgroundColor:'red', width: 200, height: 200}, // a style rule
    label: {backgroundColor: 'blue'}, // a nested style rule
    overrideLabel: {backgroundColor: 'orange'},
    '@media (min-width: 500px)': {
        root: {
            backgroundColor:'green', width: 50, height: 50
        },
      },
  });
  
  function Nested(props) {
    const classes = useStyles(props);
    return (
      <button className={classes.root}>
        <span className={classes.label}>check</span>
      </button>
    );
  }
const PracticeMakeStyleFn = () => {
    const classes = useStyles()
    return (
        <div >
            <Nested classes={{ label: classes.overrideLabel }} />;
        </div>
    )
}

export default PracticeMakeStyleFn
