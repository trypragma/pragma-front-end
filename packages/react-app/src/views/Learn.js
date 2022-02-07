import React, { useEffect, useState } from "react";
import { Body } from "../components";

export default function Learn() {

    useEffect(() => {
        // getRecords();
    }, [])
    
    return (
        <Body>
            <>
                <h1 style={{ textAlign: 'center' }}>Learn 2 Earn</h1>
                <p style={{ textAlign: 'center' }}>Powered by Proof of of Competence</p>
                <p style={{ textAlign: 'center' }}>We believe being rewarded your education learning and contribution. <br /> Let's flip the model of paying to learn ➡️ learning to earn. LFG. </p>
            </>
            
            <li style={{textAlign: 'center'}}>No Prior Code Experience</li>
            <li style={{ textAlign: 'center' }}>0 - 3 months</li>
            <li style={{ textAlign: 'center' }}>3 - 6 months</li>
            <li style={{ textAlign: 'center' }}>6 - 12 months</li>
            <li style={{ textAlign: 'center' }}>Front End</li>
            <li style={{ textAlign: 'center' }}>Clean Code</li>
            <li style={{ textAlign: 'center' }}>Security</li>
            
        </Body>
    )
}
