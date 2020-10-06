import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper,Grid} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

// centering에 관해서는 justify 랑 alignItems / alignContent라는 속성을 이용하면 된다.
// justify 라는 것은 각 그리드의 좌우 간격을 조정하는 것이라고 생각하면 된다.
// flex-start는 왼쪽으로 모는것, flex-end는 오른쪽으로 모는것, center는 가운데
// space-between은 첫쨰랑 마지막을 양 끝으로 몰아서 간격을 주는거,
// space-around는 양 끝으로 몰지 않고 간격을 주는거, space-evenly는 around랑 비슷한데 차이점 모르겠음.
// alignItems는 그리드 간의 수직관계를 조정하는 것이라고 생각하면 됨.
// flex-start는 맨 위, flex-end는 맨 밑으로
// stretch는 그리드의 콘텐츠 양에 상관없이 쭉쭉 다 늘리는 것임.
// baseline 이란것도 있는데 이건 설명하기 애매하니까 그냥 써보는면 된다. 

const GridStudy = (props) =>{

    return(
        <div>
            <Grid container justify="center">
                <Grid item>
                    <AcUnitIcon color="primary"/>
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridStudy