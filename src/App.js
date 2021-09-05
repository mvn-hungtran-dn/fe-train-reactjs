import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { Header } from './layout/header';
import { Loading } from './components/loading'
import { useEffect, useState } from 'react';
import { Sidebar } from './layout/sidebar';
import { ModalCommon } from './components/modal'
import { LOADING } from './utils/constants';
import { Routes } from './components/routes';

function App() {
  const [ isLoading, setLoading ] = useState(false)
  let status = useSelector((state) => state.fav.status)

  useEffect(() => {
    document.addEventListener(LOADING.start, listenerStart)
    document.addEventListener(LOADING.finish, listenerFinish)

    return function cleanup() {
      document.removeEventListener(LOADING.start, listenerStart)
      document.removeEventListener(LOADING.finish, listenerFinish)
    }
  })

  useEffect(() => {
    if (status === LOADING.start) {
      setLoading(true)
    } else if (status === LOADING.finish) {
      setLoading(false)
    }
  }, [status])

  function listenerStart () {
    setLoading(true)
  }

  function listenerFinish () {
    setLoading(false)
  }

  return (
    <>
      { isLoading ? <Loading /> : '' }
      <Router>
        <ModalCommon />
        <Sidebar />
        <Header />
        <Routes />
      </Router>
    </>
  )
}

export default App;
