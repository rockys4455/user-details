
import { useMediaQuery } from '@material-ui/core'
import React from 'react'

const useBreakpoints = () => {
    const breakpoints = {
        isXs: useMediaQuery("(max-width: 640px)"),
        isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
        isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
        isLg: useMediaQuery("(min-width: 1025px)"),
        active: "xs",
        imgColSize: 3 //default
    };
    if (breakpoints.isXs) {
        breakpoints.active = "xs";
        breakpoints.imgColSize = 1;
    }
    if (breakpoints.isSm) {
        breakpoints.active = "sm";
        breakpoints.imgColSize = 2;
    } 
    if (breakpoints.isMd) {
        breakpoints.active = "md";
        breakpoints.imgColSize = 3;
    }
    if (breakpoints.isLg) {
        breakpoints.active = "lg";
        breakpoints.imgColSize = 3;
    }

    return breakpoints;
}

export default useBreakpoints
