import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function TagChips({ data, currentTab, setCurrentTab }) {
  const handleClick = () => {
    console.log('newCHIP', data);
    setCurrentTab(data);
  };

  const filledChip = currentTab === data ? "filled" : "outlined";

  return (
    <Chip label={data} onClick={handleClick} style={{width: 100, marginRight: 8}} variant={filledChip} />
  );
}