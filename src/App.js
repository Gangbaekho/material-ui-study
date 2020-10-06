import React from 'react';
import CardStudy from './CardStudy'
import {Grid} from '@material-ui/core'

const App = () => { 

  return (
    <Grid container direction="column" spacing={2}>  
      <Grid item container justify="space-evenly">
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
      </Grid>
      <Grid item container justify="space-evenly">
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
          <Grid item xs={2}>
            <CardStudy/>
          </Grid>
      </Grid>
    </Grid>
  )
};

export default App;
