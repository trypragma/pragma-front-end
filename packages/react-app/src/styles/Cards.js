import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

export const DomeCardContainer = styled(Card)`
  background-color: #F4F4F4;
  margin: 0em 2em 1em 0em;
  box-shadow: rgb(29 11 69 / 2%) 0px -1px 10px, rgb(29 11 69 / 8%) 0px 1px 5px;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
`;

export const CardActionsContainer = styled(CardActions)`
  background-color: ${props => props.enabled ? "black" : "grey"};
  color: ${props => props.enabled ? "white" : "black"};

`