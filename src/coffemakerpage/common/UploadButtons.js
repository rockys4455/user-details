import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },

  btn: {
      margin: theme.spacing(1)
  } 
}));

export default function UploadButtons(props) {
  const classes = useStyles();
  const ref = useRef(null)
  const onFileChange = (e) =>{
    console.log(`ref.current.files - `,ref.current.files);
    console.log(`e.target.files - `,e.target.files);

    const file = ref.current.files[0]
    console.log(`files validattion- `,file);
    if (file.size > 4178247){
        console.log(` 1`);
        props.onUploadError({title:"Upload error!!", message: "File size cannot exceed more than 1MB"})
    } else {
        console.log(`value-`, ref.current.value);
        
        props.onUploadSuccess(file)
    }
    ref.current.value = ""
  }
  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        ref={ref}
        onChange={onFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.btn} component="span">
          Upload
        </Button>
      </label>
      
    </div>
  );
}
