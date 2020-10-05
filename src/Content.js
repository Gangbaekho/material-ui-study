import React from 'react'
import CoffeCard from './CoffeCard'
import { Grid } from '@material-ui/core'
import coffeMakerList from './constants'


// container 에다가 spacing 이라는 속성을 주면은
// 1당 8px의 padding을 주게 된다는 것을 알아두자.

const Content = () => {
    
    const getCoffeMakerCard = (coffeMakerObj) =>{
        return (
            <Grid item xm={12} sm={4}>
            <CoffeCard {...coffeMakerObj}/>
            </Grid>
        )
    } 

    return (
        <Grid container spacing={4}>
        {coffeMakerList.map((coffeMakerObj)=>getCoffeMakerCard(coffeMakerObj))}
        </Grid>
    )
}

export default Content