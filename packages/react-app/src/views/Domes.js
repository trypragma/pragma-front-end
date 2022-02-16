import React from "react";

import { Body } from "../components";
import Grid from '@mui/material/Grid';
import DomeCard from "../components/Cards/DomeCard";
import domeData from "../utils/domesData"
import {
    BrowserRouter as Router,
    Link,
  Switch,
  Route,
} from "react-router-dom";

export default function Domes() {
    return (
        <Route>
            <Body>
                <div style={{
                    marginTop: '3em', marginBottom: '3em'}}>
                    <h1 style={{margin: 16, textAlign: 'center'}}>Earn by learning.</h1>
                    {/* <p style={{margin: 0}}>Composable Web3 Education</p> */}
                    <p style={{margin: 0}}>Complete Dome Courses and be in the draw to win each month</p>
                </div>

                <div style={{
                    height: 300, width: '85%', backgroundColor: 'black', marginBottom: '3em',
                    borderRadius: 32, boxShadow: "0 17px 20px rgba(0,0,0,0.40)"
                }}>
                    <h1 style={{color: 'white', textAlign: 'center'}}> This week's prize pool: $1000</h1>
                </div>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {domeData.map((e) => {
                        return (
                            // <Link to={`/quests/${e.id}`} >
                                <DomeCard data={e} />
                            // </Link>
                        )
                    })}
                </Grid>



            </Body>
        </Route>
    )
}
