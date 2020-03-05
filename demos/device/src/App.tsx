import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Controller from './controller/views/Controller';
import RoomProvider from './room/containers/RoomProvider';
import Home from './room/views/Home';
import Meeting from './room/views/Meeting';
import routes from './routes';
import ControllerShim from './shim/ControllerShim';
import RoomShim from './shim/RoomShim';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.CONTROLLER}>
          <ControllerShim />
          <Controller />
        </Route>
        <Route path={routes.ROOT}>
          <RoomShim />
          <RoomProvider />
          <Route path={routes.MEETING} component={Meeting} />
          <Route path={routes.ROOT} exact component={Home} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
