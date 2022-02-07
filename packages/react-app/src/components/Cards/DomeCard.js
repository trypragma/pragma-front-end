import * as React from 'react';
// import CardActions from '@mui/material/CardActions';
import {
  Route,
} from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DomeCardContainer, CardActionsContainer } from '../../styles/Cards';
import Grid from '@mui/material/Grid';
// import Entercard from "Entercard.js";

import EnterCard from './Entercard';
// import aaveImage from "../../images/aave_cover.png";

export default function DomeCard({data}) {
  return (
      <Grid item>
        <DomeCardContainer sx={{ width: 250, height: "100%", alignSelf: "center" }}>
          <CardContent>
            <img alt={data.id} src={data.img} width={"100%"} />
            <Typography sx={{ mb: 2 }} color="text.secondary" >
              {data.id} Dome
            </Typography>
            <Typography variant="body2">
              {data.description}
            </Typography>
            <Typography variant="body2" style={{ marginTop: '1em'}}>
              Pool Prize: ${data.poolPrize}
            </Typography>
        </CardContent>
        <EnterCard enabled={data.enabled} id={data.id} data={data} />
        {/* <Route path='earn/data' component={() => (<EnterCard enabled={data.enabled} />)}> */}
          {/* <CardActionsContainer enabled={data.enabled}> 
            <Button style={{color: 'white'}} size="small">{data.enabled ? "Enter" : "Coming Soon"}</Button>
          </CardActionsContainer> */}
        {/* </Route> */}
        </DomeCardContainer>
      </Grid>
    // </Route>
    
   
  );
}