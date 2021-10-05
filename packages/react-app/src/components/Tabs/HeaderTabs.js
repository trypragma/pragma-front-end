import * as React from 'react';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import HeaderTab from
import { TBoxContainer, TabContainer, HeaderTab } from '../../styles/Tabs';

  
  
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
        <HeaderTab value="domes" label="Domes" />
        <HeaderTab value="earn" label="Earn" />
      </TabContainer>
    </TBoxContainer>
  );
}
