import React from "react";

import { Body } from "../components";
import Grid from '@mui/material/Grid';
import DomeCard from "../components/Cards/DomeCard";
import domeData from "../utils/domesData"

export default function Domes() {
    return (
        <Body>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {domeData.map((e) => {
                    return (<DomeCard data={e} />)
                })}
            </Grid>
        </Body>
    )
}
