import { alpha, Box, Button, Divider, Grid, InputBase, makeStyles, Typography } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import React, { useState } from 'react'
import ImgContent from './ImgContent'
import coffeData from './coffeData'
import MyImageList from './MyImageList'
import SearchIcon from '@material-ui/icons/Search';
import UploadButtons from './common/UploadButtons'
import SimpleModal from './common/SimpleModal'
import ZoomDialog from './common/ZoomDialog'

const useStyle = makeStyles(theme => {
    return {
        root: {
            backgroundColor: theme.palette.info.light,
            padding: theme.spacing(1)
        },
        item: {
            border: '1px solid red',
            width: '30%',
            backgroundColor: green[700],
            padding: theme.spacing(2),
            alignItems: 'center'
        },

        // search field
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },

            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        }

    }
})

const errorInitState = {
    title: "",
    message: "",
    openModel: false
}
const CoffeDisplay = () => {
    const classes = useStyle()

    const [error, setError] = useState(errorInitState)

    //make common setter to update error
    const handleUploadError = (errorObj) => {
        if(errorObj) {
            setError({
                title: errorObj.title,
                message: errorObj.message,
                openModel: true
            })
        }else {
            setError(errorInitState)
        }        
    }

    const handleUploadSuccess =(fileObj) => {
        console.log(`file object -`, fileObj);
    }

    // const [zoom, setZoom] = useState(false)

    return (
        <>
            {/* <ZoomDialog openDialog={zoom} onClose={()=>setZoom(false)}/> */}
            <SimpleModal title={error.title} message={error.message} openModel={error.openModel} onClose={handleUploadError}/>
            {/* display image list by grid */}
            <div className={classes.root}>
                {/* <Grid container>
                <Grid item sm={12} sm={8}>
                   <ImgContent />
                </Grid>
            </Grid> */}
                <ImgContent />
            </div>

            {/* display image list by ImageList component*/}
            <Divider variant="fullWidth" style={{ height: '50px' }} />
            <div className={classes.root} >
                <Typography>MyImageList</Typography>

                <Box display="flex" bgcolor="text.disabled" justifyContent='space-between' >
                    {/* search */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {/* add button */}
                    <UploadButtons onUploadError={handleUploadError} onUploadSuccess={handleUploadSuccess}/>
                </Box>
                <MyImageList itemData={coffeData} />
            </div>
        </>
    )
}

export default CoffeDisplay
