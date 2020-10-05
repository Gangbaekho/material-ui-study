import { Button, Grid, Paper, Typography, Switch } from '@material-ui/core'
import React,{useState} from 'react'
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'


// 여기서 중요한것은 Paper이라는 것을 뺴면은 DarkMode가 먹히지 않는다는 것이다.
// 아까 배웠다 싶이 Paper는 Background를 바꿀때 쓰면 좋다는건 이런 경우를 의미하는거다.
// 이러한 이유떄문에 대부분의 Material UI의 Component 들은 Paper 아래에 놓인다는 것이다.

const DarkMode = () =>{

    const [darkMode,setDarkMode] = useState(false)


   /*  const theme = createMuiTheme({
        palette:{
            type: darkMode ? 'dark' : 'light'
        }
    }) */

    /* 위에꺼를 쓰든 아래꺼를 쓰든간에
    상관은 없다. 내 생각엔 밑에께 더 좋은듯 하다. */

    const darkTheme = createMuiTheme({
        palette:{
            type:'dark'
        }
    })

    const lightTheme = createMuiTheme({
        palette:{
            type:'light'
        }
    })

    return(
        <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
            <Paper style={{height:'100vh'}}>
                <Grid container direction="column">
                    <Typography variant="h1">This is my App!</Typography>
                    <Button variant="contained" color="primary" fullWidth>
                    This is a button
                    </Button>
                    <Button variant="contained" color="secondary" fullWidth>
                    This is another button
                    </Button>
                    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default DarkMode