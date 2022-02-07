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
