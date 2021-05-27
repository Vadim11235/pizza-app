import PAGES from '../components/Pages';

const PIZZA = {
  SIZE: [
    {key: 'size-30', title: '30 см', value: 30},
    {key: 'size-35', title: '35 см', value: 35}
  ],
  CRUST: [
    {key: 'crust-thin', title: 'Тонкое', value: 'thin'},
    {key: 'crust-thick', title: 'Пышное', value: 'thick'}
  ],
  SAUCE: [
    {key: 'sauce-tomato', title: 'Томатный', value: 'tomato'},
    {key: 'sauce-mayonnaise', title: 'Майонез', value: 'mayonnaise'},
    {key: 'sauce-hot', title: 'Острый', value: 'hot'},
    {key: 'sauce-mushroom', title: 'Грибной', value: 'mushroom'}
  ],
  CHEESE: [
    {key: 'cheese-mozzarella', title: 'Моцарелла', value: 'mozzarella'},
    {key: 'cheese-cheddar', title: 'Чеддер', value: 'cheddar'},
    {key: 'cheese-dor-blue', title: 'Дор Блю', value: 'dor-blue'}
  ],
  VEGS: [
    {key: 'vegs-tomato', title: 'Помидор', value: 'tomato'},
    {key: 'vegs-mushrooms', title: 'Грибы', value: 'mushrooms'},
    {key: 'vegs-pepper', title: 'Перец', value: 'pepper'}
  ],
  MEAT: [
    {key: 'meat-tomato', title: 'Бекон', value: 'bacon'},
    {key: 'meat-mushrooms', title: 'Пепперони', value: 'pepperoni'},
    {key: 'meat-pepper', title: 'Ветчина', value: 'ham'}
  ]
};
const LINKS = [
  {
    orderNav: 2,
    isAuthed: false,
    path: '/sign-up',
    component: PAGES.PageReg,
    title: 'Sign up',
  }, {
    orderNav: 1,
    isAuthed: false,
    path: '/sign-in',
    component: PAGES.PageLogin,
    title: 'Sign in',
  }, {
    isHidden: true,
    path: '/:privatePage/sign-in',
    component: PAGES.PageLogin,
    title: 'Sign in',
  }, {
    orderNav: 5,
    isPrivate: true,
    path: '/orders',
    component: PAGES.PageOrders,
    title: 'Orders',
  }, {
    orderNav: 4,
    path: '/pay',
    component: PAGES.PagePay,
    title: 'Pay',
  }, {
    orderNav: 3,
    isExact: true,
    path: '/',
    component: PAGES.PizzaCreator,
    title: 'Order',
  }, {
    isHidden: true,
    path: '',
    component: PAGES.PageNotFound,
    title: '404',
  }
];

export { PIZZA, LINKS };