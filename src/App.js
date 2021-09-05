import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from './layout/header';
import { Loading } from './components/loading'
import { useEffect, useState } from 'react';
import { Sidebar } from './layout/sidebar';
import { ModalCommon } from './components/modal'
import { LOADING } from './utils/constants';
import { Routes } from './components/routes';


function App() {
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    window.addEventListener(LOADING.start, () => {
      setLoading(true)
    })
    window.addEventListener(LOADING.finish, () => {
      setLoading(false)
    })
  })

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
