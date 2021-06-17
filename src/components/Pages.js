import { useState } from 'react';
import { PIZZA } from '../utils/constants';
import PizzaConfigurator from './PizzaConfigurator';
import {Registration, Login} from './Forms';
import Order from './Order';
import { AddIngridient } from './AddIngridient';

const CreatePizzaPage = () => {
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
    console.log('render CreatePizzaPage');
    return (
        <div className="App">
            <PizzaConfigurator order={order} makeOrder={makeOrder} />
            {order.price ? <Order order={order} /> : null }

            <button onClick={() => {throw new Error('STAGING Error')}}>Break the App</button>
        </div>
    );
};

const PAGES = {
    PageIngridient: () => <AddIngridient />,
    PageLogin: () => <Login />,
    PageReg: () => <Registration />,
    PizzaCreator: () => CreatePizzaPage(),
    PagePay: () => <h1>Страница оформления заказа с формой оплаты</h1>,
    PageOrders: () => <h1>Мои заказы</h1>,
    PageNotFound: () => <h1>404 page</h1>,
};

export default PAGES;