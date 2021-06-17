import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import { LINKS } from './utils/constants';
import { PrivateRoute } from "./components/PrivateRoute";
import './css/App.css';

export default function App() {

  document.title = `PRODUCTION - ${document.title}`;

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
            )
          })
        }
			</Switch>
    </>
  );
}