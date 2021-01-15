import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import FoodList from './FoodList';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={FoodList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
