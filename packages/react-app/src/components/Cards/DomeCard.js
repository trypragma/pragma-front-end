import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DomeCardContainer } from '../../styles/Cards';

export default function DomeCard() {
  return (
    <DomeCardContainer sx={{ minWidth: 750 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sigma Dome
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pool Prize: $1000 USDC
        </Typography>
        <Typography variant="body2">
          Create and Deploy your first Smart contract
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </DomeCardContainer>
  );
}