import * as React from 'react';
import Button from '@mui/material/Button';
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
import fileTwo from '../quests/sigma/sigmaPartTwo.md';
import fileThree from '../quests/sigma/sigmaPartThree.md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  BrowserRouter as Router,
    Link,
  useParams,
} from "react-router-dom";
import SigmaData from '../quests/sigma.json';

// import {light} from 'react-syntax-highlighter/dist/esm/styles/prism'
const drawerWidth = 240;

export default function Quests() {

    const { id } = useParams()
    console.log("Quests IDParam", id);
    
    const [markdown, setMarkdown] = useState("");
    const [pageAnchor, setPageAnchor] = useState(0);

    useEffect(() => {
        fetchMarkdown(pageAnchor)
        // determinePageAnchor();
    }, [markdown, pageAnchor]);

    const fetchMarkdown = () => {
        // ToDo: Dynamically Import These
        const mdFiles = [file, fileTwo, fileThree]
        console.log('fetchMarkdown', mdFiles[pageAnchor])
        fetch(mdFiles[pageAnchor])
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
        // console.log(markdown)
    }

    const DrawerContent = () => {

        // Todo: Dynamically Sort this for other JSON / Domes
        const sections = SigmaData.content.map(e => e.description)
        
        // Todo: Make this Fixed. 
        return (
           <div style={{display: 'flex', flexDirection: 'column', width: '20%', borderRight: '1px #F2F2F2 solid', paddingLeft: '2em'}}>
                <List>
                    <p style={{ fontSize: 16 }}>Course Content</p>
                    {sections.map((text, index) => (
                        <ListItem button key={text} onClick={() => setPageAnchor(index)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }

    const questContent = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', fontSize: 16, justifyContent: 'center', paddingLeft: '4em',paddingRight: '4em', alignItems: 'center', textAlign: "left", height: '100%'}}>
                <>
                    <ReactMarkdown children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
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
