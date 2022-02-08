import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Body } from "../components";
import { useEffect, useState } from 'react';
import {
    Route,
} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import file from '../quests/sigma/sigmaPartOne.md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  BrowserRouter as Router,
    Link,
  useParams,
} from "react-router-dom";
// import { useHistory, useParams } from 'react-router-dom'

// import {light} from 'react-syntax-highlighter/dist/esm/styles/prism'
const drawerWidth = 240;

export default function ClippedDrawer() {

    const { id } = useParams()

    const [markdown, setMarkdown] = useState("");
    const [pageAnchor, setPageAnchor] = useState(0);

    useEffect(() => {
        fetchMarkdown()
        // determinePageAnchor();
    }, [markdown]);

    const fetchMarkdown = () => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }

    const determinePageAnchor = () => {
        if (pageAnchor !==0) {
            setPageAnchor(1)
        }
    }

    // return (
    //     <>
    //     <ReactMarkdown source={markdown} />
    //     </>
    // );
    // }

    const DrawerContent = () => {
        return (
           <div style={{display: 'flex', flexDirection: 'column', width: '20%', borderRight: '1px #F2F2F2 solid', paddingLeft: '2em'}}>
                <List>
                    <p style={{fontSize:16}}>Course Content</p>
                    {['Introduction', 'WTF Solidity', 'First Smart Contract ', 'Testnet', 'Front End'].map((text, index) => (
                        // <Link to={`/quests/${id}/${pageAnchor}`}>

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
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', fontSize: 12, justifyContent: 'center', padding: '10em', alignItems: 'center', height: '100%'}}>
                <>
                    <ReactMarkdown children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                // style={light}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            )
                        }
                        }}
                    />
                </>
            </div>
        )
    }

    return (
        <Route>
            <Body>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '100vh' }}>
                    {DrawerContent()}
                    {questContent()}
                </div>
            </Body>
        </Route>
  );
}
