import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Starter from "./scenes/Starter";
import Multiplayer from "./scenes/Multiplayer";
import Styled from "./scenes/Styled";
import ManyModels from "./scenes/ManyModels";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Starter} />
        <Route exact path="/multiplayer" component={Multiplayer} />
        <Route exact path="/styled" component={Styled} />
        <Route exact path="/models" component={ManyModels} />
      </Switch>
    </Router>
  );
};
