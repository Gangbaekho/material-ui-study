import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(()=>({
    typographyStyles:{
        flex:1
    }
}))

const Header = () =>{
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    This is header
                </Typography>
                <AcUnitIcon/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;