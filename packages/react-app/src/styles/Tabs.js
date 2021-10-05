import styled from "styled-components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const HeaderTab = styled(Tab)`
  /* background-color: ${props => props.value === "domes" ? "#326FD7" : "white"}; */
  border-radius: 8px;
  margin-left: 1em;
  border: none;
`;

export const TabContainer = styled(Tabs)`
    border: none;

`
export const TBoxContainer = styled(Box)`
    border: none;
    /* color: green; */
`