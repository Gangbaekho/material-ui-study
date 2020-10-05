import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'

// 이런식으로 makeStles 어다가 theme을 넘겨줄 수 있도록 설정하면은
// 특정 breakpoint를 기준으로 style을 적용할 수 있다는 것이다.
// 이건 진짜 알아둘만하지..
// useTheme을 사용하면 현재 사용하는 Theme에 대한 정보를 얻을 수 있다.

const useStyles = makeStyles( theme =>({
  root:{
    height:'100vh',
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  button:{
    backgroundColor:'blue',
    [theme.breakpoints.up('sm')]:{
      backgroundColor:'black '
    }
  }
}))

const App = () => { 

const classes = useStyles()

// 이런식으로 현재 사용하고 있는 Theme을 찍어 볼 수 있다는 것이다.
const theme = useTheme()
console.log(theme)
  return (
    <Button className={classes.button}>This is a button</Button>
  )
};

export default App;
