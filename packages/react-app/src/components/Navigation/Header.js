import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Domes from "./views/Domes";
import Earn from "./views/Earn";
import { Body, Button, Header, Image, Logo } from "./components";
import HeaderTabs from "./components/Tabs/HeaderTabs";

export default function MainRouter() {
  return (
      <Router>
        <Header>
          <Logo>Pragma.</Logo>
          <HeaderTabs />
          {/* <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} /> */}
        </Header>
          
          <Switch>
            <Route path="/earn" component={Earn}/>
            <Route path="/" component={Domes}/>
        </Switch>
    </Router>
  );
}
