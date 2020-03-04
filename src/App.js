import React, { useState, useCallback } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import "./App.css";

import Home from "./pages/home";
import Add from "./pages/add";
import Days from "./pages/days";
import Day from "./pages/day";
import { DAYS, DAYS_NAMES } from "./constants";
import { validate } from "./validate";

export const initializeState = () => {
  return Object.values(DAYS).reduce((acc, val) => {
    return { ...acc, [val]: { dia: DAYS_NAMES[val], ejercicios: [] } };
  }, {});
};

const App = () => {
  // Animation
  const location = useLocation();
  let history = useHistory();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  // TODO: move to hoc???
  // TODO: reducer
  // State
  const [rutina, setRutina] = useState(initializeState());
  const addEjercicio = (ejercicio, dia) => {
    if (!validate(ejercicio)) {
      console.error("Invalid exercise! :(");
      return false;
    }

    setRutina({
      ...rutina,
      [dia]: {
        ...rutina[dia],
        ejercicios: [...rutina[dia].ejercicios, ejercicio]
      }
    });
    history.push(`/day/${dia}`);
  };

  return (
    <div className="app-container">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route
              path="/add"
              exact
              render={props => <Add {...props} addEjercicio={addEjercicio} />}
            />
            <Route
              path="/days"
              exact
              render={props => <Days {...props} rutina={rutina} />}
            />
            <Route
              path="/day/:day"
              exact
              render={props => <Day {...props} rutina={rutina} />}
            />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
};

export default App;
