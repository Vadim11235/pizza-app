import { PIZZA } from './constants';

export default function calcPrice(order) {
  let price = 200;

  // 35 cm
  if(order.size === PIZZA.SIZE[1].value) {
    price += 50;
  }

  // every ingredient + 29
  price += (order.cheese.length + order.vegs.length + order.meat.length) * 29;

  return price;
}