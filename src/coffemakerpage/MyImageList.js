

import React, { useEffect, useState } from 'react';
import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, makeStyles, useMediaQuery } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import InfoIcon from '@material-ui/icons/Info'
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import useBreakpoints from '../hooks/use-breakpoints';
import MyDialog from './common/MyDialog';
import ZoomDialog from './common/ZoomDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'yellow'
    },
    imageList: {
        // width: 500,
        // height: 450,

    },
    titleBar: {
        background:
            // 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            // 'rgba(0,0,0,0.3) 99%, rgba(0,0,0,0) 100%)',
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
            'rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)',
    },
    actionIcon: {
        position: 'absolute',
        left: 0,
        width: '100%',
    
        background:
            // 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            // 'rgba(0,0,0,0.3) 99%, rgba(0,0,0,0) 100%)',
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
            'rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)',
    },
    actionIconIcon: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'aqua',
        //width: 'auto'  //330
    }
    
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function MyImageList({ itemData, onClickZoom }) {
    const classes = useStyles();

    // const matches = (useMediaQuery('(min-width: 600px)')? 3: 1)
    const { imgColSize } = useBreakpoints();
    const [itemList, setItemList] = useState(itemData)
    const handleSelectIcon = (id) => {
        const itemListclone = [...itemList]
        const item = itemListclone[itemListclone.findIndex(item => item.id === id)]
        item.isSelected = !item.isSelected

        setItemList(itemListclone)
    }


    // currrent id when delete image
    const [imgCurrentId, setImgCurrentId] = useState(null)

    // state for delete dialog    
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => {
        setOpen(true);
        setImgCurrentId(id)
    }
    const handleClose = () => setOpen(false);
    const handleOk = () => {
        //delete img
        const itemListClone = [...itemList]
        const newItemList = itemListClone.filter(list => list.id !== imgCurrentId)
        setItemList(newItemList)
        setOpen(false)
    }

    //state for zoom icon modal
    const [zoom, setZoom] = useState({
        id: "",
        imageUrl: "",
        title: "",
        isOpen: false
    })
    //Zoom icon handler
    const handleZoom = (item) =>{
        setZoom({
            id: item.id,
            imageUrl: item.imageUrl,
            title: item.title,
            isOpen: true
        })
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className={classes.root}>
            <ZoomDialog openDialog={zoom} onClose={()=> setZoom({id:"",isOpen: false})} />
            <span>{`image column size as per media query - ${imgColSize}. check more detail in useBreakpoints hook`}</span>
            <ImageList rowHeight={160} gap={8} cols={imgColSize} className={classes.imageList}>
                {/* <ImageListItem key="Subheader" cols={2}  style={{ height: 'auto',backgroundColor: 'orange' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem> */}
                {itemList.map((item) => (
                    <ImageListItem key={item.id}  >
                        <img src={item.imageUrl} alt={item.title} style={{}} />
                        <ImageListItemBar 
                            //actionPosition='left'
                            //   title={item.title}
                            //   subtitle={<span>by: {item.title}</span>}
                            
                            actionIcon={
                                <div className={classes.actionIconIcon} >
                                    {/* style={{width:'270px',flexGrow: 1, alignSelf: 'flex-end'}} */}
                                    <div style={{ flexGrow: 1 }}>
                                        <IconButton onClick={e => handleOpen(item.id)} >
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </div>
                                    <div >
                                        <IconButton onClick={e => handleZoom(item)} >
                                            <ZoomInIcon />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton style={{ color: item.isSelected ? 'green' : '' }} onClick={e => handleSelectIcon(item.id)}>
                                            {item.isSelected ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                        </IconButton>
                                    </div>
                                </div>
                            }

                            //className={classes.actionIcon}
                            //below is - how to override component class -> MuiImageListItemBar-actionIcon
                            classes={{actionIcon: classes.actionIcon}}
                        />

                    </ImageListItem>
                ))}
            </ImageList>
            <MyDialog
                open={open}
                handleClose={handleClose}
                dialogContent="Are you sure to delete?"
                handleOk={handleOk}
            />
        </div>
    );
}

