import styled from "styled-components";

export const Header = styled.header`
  background-color: #FFFFFF;
  /* background-color: #282c34; */
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
  border-bottom: 1px solid #F2F2F2;
`;

export const Body = styled.div`
  align-items: center;
  /* background-color: #282c34; */
  /* color: white; */
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0px 20px;
  padding: 12px 24px;
`;