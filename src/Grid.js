import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper,Grid} from '@material-ui/core'

// xs, sm 이런거는 default theme의 breeakpoint라고 생각하면 되는거고
// 보통 xs로 잡는 이유는 그 이상의 것은 해당 숫자만큼 표기하라는 거니까
// 더 responsive 하게 만드려면 sm, lg , xl 뭐 이런것들을 추가해주면
// 사이즈를 통해서 레이아웃을 바꿀 수 있다라는 개념이다.
// spacing 이라는 개념은 각 Grid item 마다 간격을 띄워주는거고 0 ~ 10까지 있다고 생각하면 됨.
// 또한 Grid container 라는 것은 default로 direction이 row이다. 12까지 채우지 않는 이상 
// 새로운 행으로 넘어가지 않는다 라고 생각해주면 되고,
// 보통은 direction을 column으로 둬서 container 안에 container를 두는 방식으로 사용한다.
// 밑에 보는 것 처럼 Grid는 container 인 동시에 item이 될 수 있다는 것도 알아둔다.
// 그리고 12까지 Grid가 있다고 했는데, 이건 하나의 container 안에서 적용하는 것이다.
// 즉 상대적인 것임. 나머지 alignText 라던지 justify 이런 속성도 있으니까
// document를 참고하길 바람.

const useStyles = makeStyles({
    paper:{
        backgroundColor:'green'
    }
})

const GridStudy = (props) =>{

    const classes = useStyles()

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid container item>
                    <Grid item xs={12}>xs=12</Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={3}>xs=3</Grid>
                    <Grid item xs={5}>xs=5</Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={7}>xs=7</Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridStudy