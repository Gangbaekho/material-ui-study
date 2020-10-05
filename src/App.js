import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {Button,Paper} from '@material-ui/core'

// Paper 라는 것은 그냥 div 같은 개념이라고 생각하면 된다.
// 그냥 Component를 감싸는것? 여기서는 dark를 먹여보았음.
// background 같은것을 적용할떄 유리한거니까 알아두자.
// Paper의 속성에는 elevation 이라는게 있고 0~24로 값을 줄 수 있음.
// 그냥 Paper의 shadow를 주는 것이라고 생각하면 편함
// 기본적으로 Paper는 Round의 형태를 띄는데 square로 바꾸면 직각으로 바꿀 수 있다.
const App = () => { 

  return (
    <Paper elevation="24" square>
      <Button>This is a button</Button>
    </Paper>
  )
};

export default App;
