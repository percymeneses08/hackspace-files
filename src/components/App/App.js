import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import Badges from '../../pages/Badges/Badges'
import BadgesCreate from '../../pages/BadgesCreate/BadgesCreate'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/badgesCreate" component={BadgesCreate}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
