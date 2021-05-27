import React from 'react';
import { PIZZA } from '../utils/constants';
import '../css/Order.css';

export default function Order({order}) {
  const getValue = prop => (
    PIZZA[prop.toUpperCase()].filter(el => el.value === order[prop])[0]
  );
  const addSplitters = arr => arr.map(el => (
    <React.Fragment key={el}>
      {el}
      <span className="Order__splitter"></span>
    </React.Fragment>
  ));
  const getValues = prop => {
    return addSplitters(
      PIZZA[prop.toUpperCase()]
        .filter(el => order[prop].includes(el.value))
        .map(el => el.title)
    );
  };

  const firstRow = `
    ${getValue('size').title} на ${getValue('crust').title.toLowerCase().slice(0, getValue('crust').title.length - 1)}м тесте
  `;
  const secondRow = [
    addSplitters([getValue('sauce').title + (order.sauce !== 'mayonnaise' ? ' соус' : '')]),
    getValues('cheese'),
    getValues('vegs')
  ];
  const thirdRow = getValues('meat');

  return (
    <section className="Order">
      <h2 className="Order__title">
        Твоя пицца за <strong>{order.price} руб</strong>
      </h2>
      <p className="Order__text">{firstRow}</p>
      <p className="Order__text">{secondRow}</p>
      <p className="Order__text">{thirdRow}</p>
    </section>
  );
}
