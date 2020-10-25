import {Home, Detail, Category} from 'pages';

const routes = [
  {
    name: "Home",
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: "Detail",
    path: '/detail/:id',
    exact: true,
    component: Detail
  },
  {
    name: "Category",
    path: '/category',
    exact: true,
    component: Category
  }
];

export default routes;
