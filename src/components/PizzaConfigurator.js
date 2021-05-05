import '../css/PizzaConfigurator.css';
import PIZZA from '../utils/constants';
import arrLikeOrder from '../utils/arrLikeOrder';
import calcPrice from '../utils/calcPrice';

import Fieldset from './Fieldset';

export default function PizzaConfigurator({order, makeOrder}) {
  const handler = (name, key, type) => {
    if(type === 'radio') {
      const cur = PIZZA[name].filter(el => el.key === key)[0];
      makeOrder(name.toLowerCase(), cur.value);
      return;
    }
    const clickEl = PIZZA[name].filter(el => el.key === key)[0];
    const curArr = order[name.toLowerCase()];
    let result = [];

    if(curArr.includes(clickEl.value)) {
      result = curArr.filter(el => el !== clickEl.value);
    } else {
      curArr.push(clickEl.value);
      result = curArr;
    }
    makeOrder(name.toLowerCase(), result);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    makeOrder('price', calcPrice(order));
  };

  return (
    <form className="PizzaConfigurator" onSubmit={handlerSubmit}>
      <h1 className="PizzaConfigurator__title">Собери свою пиццу</h1>
      <div className="PizzaConfigurator__row">
        <Fieldset
          type="radio"
          title="Размер"
          name="SIZE"
          list={arrLikeOrder(PIZZA.SIZE, order.size, 'radio')}
          handler={handler}
        />
        <Fieldset
          type="radio"
          title="Тесто"
          name="CRUST"
          list={arrLikeOrder(PIZZA.CRUST, order.crust, 'radio')}
          handler={handler}
        />
      </div>
      <Fieldset
        type="radio"
        title="Выберите соус"
        name="SAUCE"
        list={arrLikeOrder(PIZZA.SAUCE, order.sauce, 'radio')}
        handler={handler}
      />
      <Fieldset
        title="Добавьте сыр"
        name="CHEESE"
        list={arrLikeOrder(PIZZA.CHEESE, order.cheese)}
        handler={handler}
      />
      <Fieldset
        title="Овощи"
        name="VEGS"
        list={arrLikeOrder(PIZZA.VEGS, order.vegs)}
        handler={handler}
      />
      <Fieldset
        title="Мясо"
        name="MEAT"
        list={arrLikeOrder(PIZZA.MEAT, order.meat)}
        handler={handler}
      />
      <button className="PizzaConfigurator__create-order">
        Заказать за {calcPrice(order)} руб
      </button>
    </form>
  );
}
