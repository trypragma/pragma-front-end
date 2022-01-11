import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function LearnCards({ data }) {
    const [expanded, setExpanded] = React.useState(false);
    // console.log(data);
    return (
        <Card sx={{ width: 300, height: 350, marginRight: 8, marginTop:8 }}>
            <CardContent>
                <Typography paragraph>
                    {data.fields.Name}
                </Typography>
                <Typography paragraph>
                    {data.fields.Tags}
                </Typography>
                <Typography paragraph>
                    {data.fields.Description}
                </Typography>
            </CardContent>
        </Card>
    );
}
