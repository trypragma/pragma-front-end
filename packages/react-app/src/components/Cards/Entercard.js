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
// import "../../images/aave_cover.png"
// import aaveImage from "../../images/aave_cover.png";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default function EnterCard({enabled, id, data}) {
  return (
      <Link to={enabled ? `/quests/${id}` :'#'}>
            <CardActionsContainer enabled={enabled}> 
              <Button style={{color: 'white'}} size="small">{enabled ? "Enter" : "Coming Soon"}</Button>
            </CardActionsContainer>
      </Link>
  );
}