import * as React from 'react';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import HeaderTab from
import { TBoxContainer, TabContainer, HeaderTab } from '../../styles/Tabs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
  
export default function HeaderTabs() {
  const [value, setValue] = React.useState('dome');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TBoxContainer>
      <TabContainer
        value={value}
        onChange={handleChange}
        // textColor={value === "domes" ? "black" : "white"}
        // indicatorColor="#326FD7"
        // aria-label="secondary tabs example"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderTab value="learn" label="Learn"/>
        </Link>
        
        <Link to="/earn" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderTab value="earn" label="Earn"/>
        </Link>

         <Link to="/earn" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderTab value="earn" label="Bounties"/>
        </Link>

      </TabContainer>
    </TBoxContainer>
  );
}
