import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;

const FeatureOne = () => <h2>Feature One</h2>;

const FeatureTwo = () => <h2>Feature Two</h2>;

const NestedSwitchOne = () => (
  <div>
    <h2>Nested Switch One</h2>
    {/* Define routes specific to Nested Switch One */}
    <Switch>
      <Route path="/nested/one/feature1">
        <h3>Feature 1</h3>
      </Route>
      <Route path="/nested/one/feature2">
        <h3>Feature 2</h3>
      </Route>
    </Switch>
  </div>
);

const NestedSwitchTwo = () => (
  <div>
    <h2>Nested Switch Two</h2>
    {/* Define routes specific to Nested Switch Two */}
    <Switch>
      <Route path="/nested/two/feature3">
        <h3>Feature 3</h3>
      </Route>
      <Route path="/nested/two/feature4">
        <h3>Feature 4</h3>
      </Route>
    </Switch>
  </div>
);

const New = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feature1">Feature One</Link>
            </li>
            <li>
              <Link to="/feature2">Feature Two</Link>
            </li>
            <li>
              <Link to="/nested/one">Nested Switch One</Link>
            </li>
            <li>
              <Link to="/nested/two">Nested Switch Two</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feature1" component={FeatureOne} />
          <Route path="/feature2" component={FeatureTwo} />
          <Route path="/nested/one" component={NestedSwitchOne} />
          <Route path="/nested/two" component={NestedSwitchTwo} />
        </Switch>
      </div>
    </Router>
  );
};

export default New;
