import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Body } from "../components";
import {
    BrowserRouter as Router,
    Link,
  Switch,
  Route,
} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
// import AppMarkdown from '../../README.md';


const drawerWidth = 240;

export default function ClippedDrawer() {

    const DrawerContent = () => {
        return (
           <div style={{display: 'flex', flexDirection: 'column', width: '20%', borderRight: '1px #F2F2F2 solid', paddingLeft: '2em'}}>
                <List>
                    <p style={{fontSize:16}}>Course Content</p>
                    {['Introduction', 'WTF Solidity', 'First Smart Contract ', 'Testnet', 'Front End'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon> */}
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        {/* </ListItemIc/on> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </div>
        )
    }

    const questContent = () => {
        return (
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <>
                    <p style={{ textAlign: 'center' }}>Quest</p>
                    <p style={{ textAlign: 'center' }}>We believe being rewarded your education learning and contribution. <br /> Let's flip the model of paying to learn ➡️ learning to earn. LFG. </p>
                </>
            </div>
        )
    }
    return (
        <Route>
            
            <Body>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
                    {DrawerContent()}
                    {questContent()}
                </div>
            </Body>
        </Route>
  );
}
