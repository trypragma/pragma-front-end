import { useQuery } from "@apollo/react-hooks";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import React, { useEffect, useState } from "react";

import { Body, Button, Header, Image, Logo } from "./components";
import DomeCard from "./components/Cards/DomeCard";
import HeaderTabs from "./components/Tabs/HeaderTabs";
import logo from "./ethereumLogo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";
import Box from '@mui/material/Box';


<Body>
        {/* Two Column Layout. */}
        {/* <Box sx={{ display: 'flex' }}> */}
          <DomeCard/>
          <DomeCard/>
        {/* </Box> */}

        {/* <Box sx={{ display: 'flex' }}> */}
          <DomeCard/>
          <DomeCard/>
        {/* </Box> */}

</Body>
      

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}