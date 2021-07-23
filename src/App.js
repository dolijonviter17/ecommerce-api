import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
