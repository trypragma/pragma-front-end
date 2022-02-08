import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Domes from "./views/Domes";
import Learn from "./views/Learn";
import Quests from "./views/Quests";
import { Body, Button, Header, Image, Logo } from "./components";
import HeaderTabs from "./components/Tabs/HeaderTabs";

export default function MainRouter() {
  return (
      <Router>
        <Header>
          <Logo>Pragma.</Logo>
          <HeaderTabs />
          <Logo>Wallet.</Logo>
          {/* <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} /> */}
      </Header>
      <div>
        <Switch>
            <Route path="/earn" component={Domes} />
            <Route path="/quests/:id/" component={Quests}/>
            <Route path="" component={Learn} />
        </Switch>
      </div>
      {/* Footer */}
    </Router>
  );
}
