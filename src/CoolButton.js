import React from 'react'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import classNames from 'classnames'

const useStyles = makeStyles({
    buttonStyles:{
        color: props => (props.cool ? "blue" : "red")
    },
    backgroundStyles:{
        backgroundColor:'blue'
    }
})

const CoolButton = (props) => {

    const classes = useStyles(props)

    return(
         <Button fullWidth className={classNames(classes.buttonStyles,classes.backgroundStyles)}>
            This is cool button
        </Button>
    )
}

export default CoolButton
