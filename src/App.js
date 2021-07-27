import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { Main } from './layout/main';
import { Products } from './pages/products';
import { Login } from './pages/login';
import { Detail } from './pages/detail';
import { Account } from './pages/account';


const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/products',
    component: Products,
    exact: true,
  },
  {
    path: "/products/:id",
    component: Detail
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/me',
    component: Account,
    protect: true
  }
]

function PrivateRoute({ children }) {
  return (
    <Route
      render={({ location }) =>
        !!localStorage.getItem('userName') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  )
}

export default App;
