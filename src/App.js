import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import { LINKS } from './utils/constants';
import { PrivateRoute } from "./components/PrivateRoute";
import './css/App.css';

export default function App() {

  const [order, setOrder] = useState({
    size: PIZZA.SIZE[0].value,
    crust: PIZZA.CRUST[0].value,
    sauce: PIZZA.SAUCE[0].value,
    cheese: [PIZZA.CHEESE[0].value],
    vegs: [PIZZA.VEGS[0].value],
    meat: [],
    price: null
  });

  const makeOrder = (key, value) => {
    const copy = Object.assign({}, order);
    copy[key] = value;
    setOrder(copy);
  }

  document.title = `PRODUCTION - ${document.title}`;
  return (
    <div className="App">
      <PizzaConfigurator order={order} makeOrder={makeOrder} />
      {order.price ? <Order order={order} /> : null }
      <button onClick={() => {throw new Error('PRODUCTION Error')}}>Break the App</button>
    </div>

  return (
    <>
      <Navigation />
      <Switch>
        {
          LINKS.map(el => {
            const data = {
              key: el.path,
              path: el.path,
              component: el.component
            };
            if(el.isPrivate) {
              data.redirectPath = el.path + "/sign-in";
            }
            if(el.isExact) {
              data.exact = true;
            }
            return (
              el.isPrivate ? <PrivateRoute {...data} />
                : <Route {...data} />
            );
          })
        }
			</Switch>
    </>

  );
}