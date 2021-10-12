import React from 'react'
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from "react-router-dom";


const drawerWidth = 240

const useStyles =  makeStyles({
    page:{ 
        background : '#f9f9f9',
        width : '100%'
    },

    drawer: {
        width: drawerWidth
    },

    drawerPaper:{
        width: drawerWidth
    },
    
    root:{
        display: 'flex'
    },
    
    active:{
        background:'#f4f4f4'
    }
})

const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="primary" />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineOutlined color="primary" />,
        path: '/create'
    }
]

export default function Layout({children}) {

    const classes = useStyles()
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <div className={classes.root}>
                <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
                >
                <div>
                    <Typography
                    variant= 'h5'
                    >
                        Style Notes
                    </Typography>
                </div>

                <List>
                    {
                        menuItems.map(item => (
                            <ListItem 
                                button
                                key={item.text}
                                onClick={() => (history.push(item.path))}
                                className={location.pathname === item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>

                            </ListItem>
                        ))
                    }                  
                </List>

                </Drawer>
                <div className={classes.page}>
                    {children}
                </div>
            
            </div>
        </div>
    )
}