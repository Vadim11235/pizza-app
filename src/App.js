import {useState} from 'react';
import PIZZA from './utils/constants';
import './css/App.css';

import PizzaConfigurator from './components/PizzaConfigurator';
import Order from './components/Order';


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

  document.title = `STAGING - ${document.title}`;
  return (
    <div className="App">
      <PizzaConfigurator order={order} makeOrder={makeOrder} />
      {order.price ? <Order order={order} /> : null }
    </div>
  );
}
