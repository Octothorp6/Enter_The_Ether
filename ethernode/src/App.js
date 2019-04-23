import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Product from './views/Product';
import Contact from './views/Contact';
import Layout from './hoc/Layout'

//layout function with incoming Components as the parameter
const withLayout = Component => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact render={() => withLayout(Home)} />
        <Route path="/product" exact render={() => withLayout(Product)} />
        <Route path="/contact" exact render={() => withLayout(Contact)} />
      </Switch>
    </div>
  </Router>
);

export default App;
