
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Drawer, ListItem, ListItemText, makeStyles, Typography, List, AppBar, Toolbar } from '@material-ui/core'

const drawerWidth = 240

const useStyle = makeStyles(theme => {
    return {
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundColor: theme.palette.success.light,
            height: '100%'
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        date: {
            flexGrow: 1
        },
        toolbar: theme.mixins.toolbar
    }
})
function Layout({ children }) {
    const classes = useStyle()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Link Button 1',
            path: '/'
        },
        {
            text: 'Link Button 2',
            path: '/create'
        },
    ];
    return (
        <div className={classes.root}>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Drawer
                    </Typography>
                </div>

                {/* links/list section */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            // onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            {/* app bar */}
            <AppBar
                position="fixed"
                className={classes.appBar}
                elevation={0}
                color="primary"
            >
                <Toolbar >
                    <Typography className={classes.date}>
                        Header text
                    </Typography>
                    <Typography>Login</Typography>
                </Toolbar>
            </AppBar>

            {/* main page */}
            {/* <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div> */}
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>


        </div>
    )
}

export default Layout
