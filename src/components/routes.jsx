import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Fav } from "../pages/fav";
import { Login } from "../pages/login";
import { Home } from "../pages/home";

export function Routes () {
  const routes = [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/favorite',
      component: Fav,
      protect: true
    }
  ]

  function PrivateRoute({ children }) {
    return (
      <Route
        render={({ location }) =>
          !!localStorage.getItem('token') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }

  return (
    <>
      <Switch>
        {routes.map((route, i) => {
          if (route.protect) {
            return (
              <PrivateRoute key={i}>
                <route.component routes={route.component} />
              </PrivateRoute>
            )
          } else {
            return <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={item => (
                <route.component routes={item.component} />
              )}
            />
          }
        })}
      </Switch>
    </>
  )
}
