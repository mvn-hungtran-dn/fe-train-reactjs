import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from './layout/header';
import { Main } from './layout/main';
import { Login } from './pages/login'
import { Loading } from './components/loading'
import { useEffect, useState } from 'react';
import { Sidebar } from './layout/sidebar';

const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/login',
    component: Login,
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
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    window.addEventListener('loadingStart', () => {
      setLoading(true)
    })
    window.addEventListener('loadingFinish', () => {
      setLoading(false)
    })
  })

  return (
    <>
      { isLoading ? <Loading /> : '' }
      <Router>
        <Sidebar />
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
      </Router>
    </>
  )
}

export default App;
